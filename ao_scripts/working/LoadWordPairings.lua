local base64 = require(".base64")
local json = require('json')

Handlers.add(
    "Make_Word_Embedder_Pairings",
    Handlers.utils.hasMatchingTag("Action", "AddToWordPairings"),
    function(msg)
        assert(type(msg.TXID) == 'string', "TXID required")
        print("TXID: " .. msg.TXID)
        local startValue = #Inbox  -- Starting point for the countdown
        
        for y = startValue, 1, -1 do
            if Inbox[y].Tags.Load == msg.TXID then
                
                print("Found it! | Index: " .. y)
                
                local data = Inbox[y].Data.Data
                -- print("Data: " .. data)
                local base64Data = base64.decode(data)
                local pairings = json.decode(base64Data)

                print("Adding embeddings")
                for word, embedding in pairs(chunk) do
                    Words_Embedders[word] = embedding
                end
                print("Done!!")
                
                
                -- print("Data Found")
                -- print(data)
--                 
--                 
                break
            end
        end
    end
)
