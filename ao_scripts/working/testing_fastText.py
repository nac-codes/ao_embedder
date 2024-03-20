import os
import json

def load_vectors(fname):
    with open(fname, 'r', encoding='utf-8', newline='\n', errors='ignore') as fin:
        n, d = map(int, fin.readline().split())  # Adjust if your file format differs
        data = {}
        for line in fin:
            tokens = line.rstrip().split(' ')
            data[tokens[0]] = list(map(float, tokens[1:]))
    return data

def save_chunks(vectors, base_dir, chunk_size_kb=100, embedder_limit_mb=10):
    chunk_size_bytes = chunk_size_kb * 1024
    embedder_limit_bytes = embedder_limit_mb * 1024 * 1024
    embedder_map = {}
    current_chunk = {}
    current_chunk_size = 0
    current_chunk_num = 0
    current_embedder_size = 0
    current_embedder = 0
    os.makedirs(base_dir, exist_ok=True)

    for word, vector in vectors.items():
        # Estimate size by adding this word to the chunk
        temp_chunk = current_chunk.copy()
        temp_chunk[word] = vector
        temp_chunk_size = len(json.dumps(temp_chunk, separators=(',', ':')))

        if temp_chunk_size > chunk_size_bytes or current_embedder_size + temp_chunk_size > embedder_limit_bytes:
            # Save current chunk
            embedder_dir = os.path.join(base_dir, f"embedder_{current_embedder}")
            os.makedirs(embedder_dir, exist_ok=True)
            with open(os.path.join(embedder_dir, f"vector_chunk_{current_chunk_num}.json"), "w") as f:
                json.dump(current_chunk, f, separators=(',', ':'))
            current_embedder_size += len(json.dumps(current_chunk, separators=(',', ':')))

            # Check if need to move to the next embedder
            if current_embedder_size + temp_chunk_size > embedder_limit_bytes:
                current_embedder += 1
                current_embedder_size = 0
                current_chunk_num = 0
            else:
                current_chunk_num += 1

            # Reset current chunk
            current_chunk = {word: vector}
        else:
            # Add to the current chunk
            current_chunk = temp_chunk
            embedder_map[word] = current_embedder

    # Save the last chunk if not empty
    if current_chunk:
        embedder_dir = os.path.join(base_dir, f"embedder_{current_embedder}")
        os.makedirs(embedder_dir, exist_ok=True)
        with open(os.path.join(embedder_dir, f"vector_chunk_{current_chunk_num}.json"), "w") as f:
            json.dump(current_chunk, f, separators=(',', ':'))

    # Save embedder map
    with open(os.path.join(base_dir, "embedder_key_map.json"), "w") as f:
        json.dump(embedder_map, f, separators=(',', ':'))

# Load the vector file
vector_file = "/Users/chim/Documents/wiki-news-300d-1M.vec"
print("Loading...")
vectors = load_vectors(vector_file)
print("Loaded.")

# Define base directory for chunks
base_dir = "/Users/chim/Documents/embedders"

# Save chunks and key map
print("Generating chunks...")
save_chunks(vectors, base_dir)
print("Chunks generated.")
