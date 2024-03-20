local base64 = require(".base64")
local json = require('json')


-- we recieve an input string

Handlers.add(
    "MakeWordPairing",
    Handlers.utils.hasMatchingTag("Action", "SendToTheEmbedder"),
    function(msg)
        assert(type(msg.Input) == 'string', "Input required")
        RequestNumber = RequestNumber + 1
        local input = msg.Input

        -- break up string into words
        local words = {}
        for token in input:gmatch("%S+") do
            table.insert(words, token)
        end

        -- get corresponding embedder from Words_Pairing
        local order = 1
        for _, word in ipairs(words) do

            -- handle if word not in Words_Pairing
            if Word_Pairings[word] == nil then
                print("Word not found in Word_Pairings")
            else
                local embedder_TXID = Word_Pairings[word]
                print("Embedder: " .. embedder_TXID)

                ao.send({
                    Target = embedder_TXID,
                    Input = word,
                    Sender = msg.From,
                    RequestNumber = RequestNumber,
                    Order = order,
                    Action = "GetEmbedding"
                })
                order = order + 1
            end

        end
    end
)