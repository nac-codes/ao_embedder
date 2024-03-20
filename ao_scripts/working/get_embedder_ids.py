import re

# Assuming your text is stored in a variable `text`
# If you're reading from a file, you'll replace this part with file reading code

# Read from file
with open("/Users/chim/Documents/my-arweave-app/output2.txt", "r") as file:
     text = file.read()


# This pattern is designed to capture both the running process (embedder_X) and the following aos process ID
pattern = r"Running (embedder_\d+).*?aos process:.*?([A-Za-z0-9_-]{43})"

# Find all matches in the text
matches = re.findall(pattern, text, re.DOTALL)

# Prepare the Lua tables
lua_process_to_id_table = "local process_to_id = {\n"
lua_id_to_process_table = "local id_to_process = {\n"

for process, aos_id in matches:
    lua_process_to_id_table += f"  ['{process}'] = '{aos_id}',\n"
    lua_id_to_process_table += f"  ['{aos_id}'] = '{process}',\n"

lua_process_to_id_table += "}"
lua_id_to_process_table += "}"

# Output filename
output_filename = "process_id_mapping.txt"

# Write the Lua tables to the file
with open(output_filename, "w") as output_file:
    output_file.write(lua_process_to_id_table + "\n\n" + lua_id_to_process_table)

print(f"Process to ID mappings have been saved to {output_filename}.")


