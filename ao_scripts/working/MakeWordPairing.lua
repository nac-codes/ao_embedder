local base64 = require(".base64")
local json = require('json')

RequestNumber = 1000000

Handlers.add(
    "MakeWordPairing",
    Handlers.utils.hasMatchingTag("Action", "AddToModel"),
    function(msg)
        assert(type(msg.Tags.TXID) == 'string', "TXID required")
        print("TXID: " .. msg.Tags.TXID)
        local startValue = #Inbox  -- Starting point for the countdown
        
        for y = startValue, 1, -1 do
            if Inbox[y].Tags.Load == msg.Tags.TXID then
                
                print("Found it! | Index: " .. y)
                
                local data = Inbox[y].Data.Data
                -- print("Data: " .. data)
                local base64Data = base64.decode(data)
                local chunk = json.decode(base64Data)

                print("Adding embeddings")
                for word, embedder in pairs(chunk) do
                    Word_Pairings[word] = embedder
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
