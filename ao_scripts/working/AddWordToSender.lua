local base64 = require(".base64")
local json = require('json')

RequestNumber = 1000000

Handlers.add(
    "MakeWordPairing",
    Handlers.utils.hasMatchingTag("Action", "AddWordToSender"),
    function(msg)
        assert(type(msg.Tags.Word) == 'string', "Word required")
        assert(type(msg.Tags.Embedder_TXID) == 'string', "Embedder_TXID required")
        print("Word: " .. msg.Tags.Word)
        
        
        Word_Pairings[msg.Tags.Word] = msg.Tags.Embedder_TXID
        
    end
)
