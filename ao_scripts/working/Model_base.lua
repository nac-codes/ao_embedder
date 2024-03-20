local ao = require('ao')
local base64 = require(".base64")
local json = require('json')


Model = {}


-- Handlers.add(
--     "GetModel",
--     Handlers.utils.hasMatchingTag("Action", "GetVec"),
--     function(msg)
--         assert(type(msg.Tags.TXID) == 'string', "TXID required")
--         print("TXID: " .. msg.Tags.TXID)
        
--         ao.send({
--             Target = ao.id,
--             Tags = {
--                 Load = msg.Tags.TXID,
--                 Action = "Data"
--             }
--         })
        
--         -- get length of model_txids json
--         local len = 0
--         for _ in pairs(Model_txids) do len = len + 1 end
--         print("Length: " .. len)
--         Model_txids[len + 1] = msg.Tags.TXID

--         -- convert ledger to json and print
--         print("Model_Txids: " .. json.encode(Model_txids))
--     end
-- )



-- function AddOrUpdate(data, ownerTXID, chunkTXID, hits)
--     if not data[ownerTXID] then
--       data[ownerTXID] = {} -- Create a new owner entry if it doesn't exist
--     end
    
--     -- Add or update the chunk's hit count for the given owner
--     data[ownerTXID][chunkTXID] = { hits = hits }
-- end

-- function GetHits(data, ownerTXID, chunkTXID)
--     if data[ownerTXID] and data[ownerTXID][chunkTXID] then
--         return data[ownerTXID][chunkTXID].hits
--     else
--         return nil -- Return nil if the owner or chunk doesn't exist
--     end
-- end
  
-- local ledger = {}

-- Handlers.add(
--     "TriggerDownload",
--     Handlers.utils.hasMatchingTag("Action", "GetWeave6"),
--     function(msg)
--         assert(type(msg.TXID) == 'string', "TXID required")
--         assert(type(msg.Wallet) == 'string', "Wallet required")
--         print("TXID: " .. msg.TXID)
--         print("Wallet: " .. msg.Wallet)
        
--         ao.send({
--             Target = ao.id,
--             Tags = {
--                 Load = msg.TXID,
--                 Action = "Data"
--             }
--         })

--         AddOrUpdate(ledger, msg.Wallet, msg.TXID, 1)

--         -- convert ledger to json and print
--         print("Ledger: " .. json.encode(ledger))
--     end
-- )

-- Handlers.add(
--     "GetData",
--     Handlers.utils.hasMatchingTag("Action", "GetData4"),
--     function(msg)
--         print("GetData4")
--         assert(type(msg.TXID) == 'string', "TXID required")
--         local startValue = #Inbox  -- Starting point for the countdown
--         print("Searching...")
--         for i = startValue, 1, -1 do
--             print("Inbox[" .. i .. "].Tags.Load: ")
--             if Inbox[i].Tags.Load == msg.TXID then
--                 print("Found it!")
--                 local data = Inbox[i].Data.Data
--                 -- print("Data: " .. data)
--                 -- print("Decoded: " .. base64.decode(data))
--                 print("Hits" .. GetHits(ledger, msg.From, msg.TXID))
--                 break
--             end
--         end
--     end
-- )

