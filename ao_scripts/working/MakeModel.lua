local base64 = require(".base64")
local json = require('json')

-- Change to add tags to handle mjs
Handlers.add(
    "Make_Model",
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
                for word, embedding in pairs(chunk) do
                    Model[word] = embedding
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
