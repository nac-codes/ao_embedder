local base64 = require(".base64")
local json = require('json')

-- Change to add tags to handle mjs
Handlers.add(
    "Make_Model",
    Handlers.utils.hasMatchingTag("Action", "AddWordToEmbedder"),
    function(msg)
        assert(type(msg.Tags.Word) == 'string', "Word required")
        print("Word: " .. msg.Tags.Word)
        
        
        Model[msg.Tags.Word] = msg.Data
        
    end
)
