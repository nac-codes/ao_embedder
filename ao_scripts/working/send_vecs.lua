local txids = {
  "JjZZN-B11vnKI1-rs4LEex5YV0w0wKSHwL2Gg357kK0",
  "XycSZ9KoVmLWsgasr-e5DEAtVQsoY-2j0RLznJzXolQ",
  "hx5UZ3JUfDlxhd6CK0VUtOwkE9p_yfsFIyeXfGcpuPM",
  "je4zQUCsRgyZlwZxHgHvt-yymFIivB-tb00wnaRwT3c",
  "M6MTNvU6gtX7FaABWLGicwpn-599kLYzW0nc__1Say4",
  "FE1ZoxErDFz1ohyPPUiWpDQmUdGsVIMeokjATSANk1Y",
  "3yGmIZ3FBpujeUXFF4pivsGv93BWkwF9DzhrMVLCFgM",
  "bGZJyBtfUk7CYPK9CtpJFpg3mFJBB5FCGs8Cq-tLbP8",
  "rWsDkNExGTXtzejtqluz-fZETuwNVTr-ebL10WkNo2o",
  "WloZbF_w1oW4DKEgelyaoSxzIFfs1Isu575DcFc3-_8",
  "V4GhpPgwOfN5nh4xtdwoHDui2Fa3yy1bQ-dP9bs90hc",
  "LednLjz-CUn7R8Vnx-8VRCAu8TbAfJwsjA1Bb-orBfk",
  "uQ7G565AqzlTMmptB1YigUK2TdhXtEzGO5V1PL_NvTM",
  "m5-Gi-U37TmqVcz8MERwNEsxLJmyAoiExdpNGzJCIXg",
  "YV8xkZWKwjKcrTkA0Qi9-uNtcZX6ueMSErRP6XBeDE0",
  "THtZ6brE-qS-eGJzAOOj4xduIln4l_oD3rX_BytRiIA",
  "piA8w8yBGYacPrDRMrsg5284AZXjUWsc2C15MTTrHco",
  "ZRCMudGRtE5ouBS9fR3u5IhdPzzffce-livAYRb1Pg0",
  "56-1neI7bFdfaGY1fL30w-d0JmsR6Wu9fx_fVKPsxTQ",
  "PVEphhktm8oH2KgXW2NIYXp-uNS5ajGqBWUorYVVwnk",
  "S7pDPsa4v6qVoqgpayE9tcW5M6YzdnXz733flh2_Wes",
  "wZD47g4PuNcj28n5eJZzdenNGoQl_VshJ18OvOKu7Sc",
  "7RbJUQ0xb09MpIZyZEZXmmb2r4G3s-c5_l-ad0VZreY",
  "mXysBf_wuDbUe631215mEad-KXBcClg_hKhcLaxf0og",
  "Ng0pij0LNni5RxeCtWlUVzJJ1n69bGVM4TagfWUcFE8",
  "8M6BBgIarG49jlC6Epvk7-4hlBjfwRN7nli0hTzNnCQ",
  "c_n3q-Vwise2SeJXf7bMXS-IGAslQDV75ww1kh1lqKk",
  "xUVjfBH1nxpy9NnTrOcXnOXtxf9kszYIzNkQUYwJUCA",
  "BSJmI3nnFEyozbO7s8qOOE1ER5Mo8rAxhpv9ijR-Mns",
  "cQEvV7Ixl-2STBtXHfcWkZjgq-EG6_AfodojEzYNDBo",
  "MbKhKBPmh2jJ4s6fKSQBSfxyuXfiARz4MpNA6YJzAcs",
  "ElEa9JPx-gy4MY8oZZLrAWmdY4FsbSpTKewq51yV5oQ",
  "YSvuArPIS3_ZpbwAbpr3j0Np7CP7dV-g71qSmnZIzew",
  "pLNKHbt4VRILn8Ooz7gqtsf3AmvAvxPtzpGfMaJgaAc",
  "VqZDZn6nb3RIlqCLuZrXgw5-waYoax5eQsLX_LqSDQc",
  "n42Qm3_ClnB9yPuB1xdPVSsXWoJbrYtvbvg5zKA322A",
  "LmANbh3jeJ34Ltgk6jTc3-VouzHOTkduTMSYjOTz_Yk",
  "DnvEZdB0QnrJ2zckPbrow53n_PN9s7rm65hj5jfXie8",
  "vEUNPYmpdkx06PkhUCGfOCdGlZa-SEbb_7ZrN7Wa6Rw",
  "qRjV09XrgFpwNl_cM70jRBLA5xaQYdlPZAJLn-8MU1A",
  "LcYcxATil6jgLJBZ5dXhCUmDtV0biEjkpk_cnnuDMB4",
  "UJHUBnCuZ4Bp7KvtREi9IXMbJUrZ3PsYVPH8w7CfGN8",
  "bJ9vHFE4lv7BHVxWE7xtG_mHsSQjAdi4vk5ZDBSIrME",
  "aepU05i0w7lZsBLNGvspFWirI0UyEFRhWTiWOFFGep4",
  "DY6zklzQKwCOCKA1ZhncwDtMji_vnfzSmUXKVrHU6H0",
  "U5YRYpvG8OPXekCU7ZzUWOV_f1qYeaDn_2P-vnDpGi4",
  "15Q4Y6ggQJHxOPaZjm8Dq5xPY5Q4C7_VbWbt3KStyU0",
  "dvMH36-gF4g3oRl6gHmqS1SQZSBDMYCWLfLJ8fNtkw4",
  "TKotOGIyi1f1WugZSYQXGiFieMdUOfW6XIx7EbqT5Gs",
  "LJfqAUOS5goKZOX-DEDm6oMrZ2rdBhY8IXl1IUD_RcM",
  "5UOSjyjGXY90jcf98Ran0CsfZihrjAcN91HZ8o-qYMI",
  "EphUrY-fHmOhFRHBbgxW8QdF_-3wfpVapFw6ydJ7lg0",
  "c65QtF_3zh3IhuhsgU5cMojy7UWobXiqT1elqrR8LkA",
  "DcQ-mFDh7b0CkOllyU6e0-zsGGLNhRRqYYeSTOHzhXI",
  "ElxckiiUQwtPRzl-XSTvtmyslJl7lI31JGkzdEktV9I",
  "sIOPDjQC218sykjVRvI4YTcdYVYECdhlGykZtnHAK-k",
  "xaXDQ60YNaPrTEeJzMK4Ikpz1KPpho42xKFtGN7C7XE",
  "v2PS3dSZOqMSvFYopMkEJxCzz3hhVz2-660l36a5yOY",
  "OKVKl8pCyzBCYyS1-rEQSI1We578RbpRrEclABQcFGg",
  "fdwuSPcq9d2sqPDkJZlLyE1CsVev_bNMpKJOKFFFkYQ",
  "cZ02_4Ab6eEceY6h2XgXJiXgurOnzxyofo7qIRwglWk",
  "cLeGaxx3-qEovxTDtr84o0SRSQjDybUssdeiAwpTfb4",
  "XKoxjJqP8XRzmIkdKbga4uTD39vZSPXYk4XoBwTWbr0",
  "x7gaw0HRc9vm5_lSRpFrScGZ3qigvOpMzbJ_zZ9s6B0",
  "LNYidfJ6a_CftxmkfoRhc0-LzFkC269KI-bHKzUK880",
  "fHG5Jbdv4cPV4YCTQpUXFQrRUeSekWUCXWqubcCzy4M",
  "wMsk_pMa3g8GRlL8vT4CS9MJ8G9-2XnpOtPXh6YURMg",
  "pdcdiGYhT67-psm1qPK0ek-u9Mb7jRNqVD3mqbvYtHU",
  "Gfsxxzjq5x5UhTzUwFVSGu11--cxjSa5OfA0YZKVSzo",
  "Ck0yHnD4bsoU6941TZoNuSDPIeBYsFP9fFJ-fiTD3F4",
  "S8jksJ28kzA3gtNRYWSbRTXVnI1_-J5PhzH_LwKhjH0",
  "f2SM0zvgcFzh-wVlNYjkg95YyldHOlNg9GhTFMzzDfk",
  "IHTgUPnrh7peGcJCdZH4-kNrtvFz4vdpq2yuITYWgCw",
  "ID5LFpvDIU0dFzLV0VWqlyURTJ5qsgimm1eEtHboUqg",
  "P5Geewa6GGQ0LyqNjsegHI46G1nxpmEsXPXTJ4a7NiA",
  "stnb8QnjUNqj3rQ2u3ibCxeV9dyRU15k_1dEPL82QI8",
  "c8cgAdB3q_-sxzEHZJRvJf1Kb2z58ZvYEEDfO2Zp9ek",
  "T-MrTBNjG7w1K87yfPVe0To4sLfM2CmdddNJd2D-hLA",
  "i5P9jsrsEO6_eF2GviHBHRz-c8gO9qIXIDutf6RFVIg",
  "wT8VneJMKQXBtzbr_-ITTyGuE3_3zd0NM9y0he4IXF4",
  "1aj3eagZncIfK9vp2v742HDLrWJ7_JomQ95kC3RZ7sk",
  "Fax8OLjFHa2wdv7HuDzuVPZJ-GyrtZ4RV-JjHmgWZKs",
  "xMlehahUz-iv4S7CPMbSmAyNhLdahUWWoEmtRiU5u5I",
  "POYiMqMvWjiL5nsPqCKy2S_egPE20jlyBoeiT7wNwKM",
  "UkWbvx9MtnmyqTLKfnoEDL-6semMg3tj4QQS3zV6aRQ",
  "n8J927DucoGL_rilj0l96m7JJ4sZIx1g8cANtfZcCCA",
  "Ez4IPMSYVE5d_FJ7nhM-4YaJNYmJopuHoqDD0oPrXuM",
  "6RPtoIzSTz3P-KJxphBHa8uxf9dsOJATNQDNlc3hth0",
  "uaZi8qXjSMN6tMNGC54gABTvgd7YD3cIZ7riNFwc0WI",
  "op5uHue6ZpzMU5Z1h0ii2pHESFf6w3KgNaY1AlZIvmY",
  "k_QrG7guPs7-GHcOIn3DZZeYNGb_JZMaws-TfcgdqKg",
  "u-7xXtJcD64znTQNnywcksp3uNWJSCYLflD85lkXh4c",
  "5yxjcLj_qbQ9SoUqkKZsf68PxmEJsz-ltNF8b1KKhoQ",
  "ycIbeA1MTmxJAUm4fS9t0S8MYn2lnsoRDiKwmtVNkU0",
  "4ga7QT3vmGfXdppwQQYVWzjMO5weXw0EeETfywgfWpE",
  "zT0ae_oRDWbkiMEIoArzPUqXPRRKygpcxU9a9EXd_Hs",
  "2WgdFXDk9ItPAVhF-SaBHU4-fwaSX-dprdlKHzqe2ic",
  "qMlUm_o3hIyJj95PzpNM6YA9s92Ita_FEziTUDUuszo",
  "imIHsq_AUfTq2p4Rfy2OYpV18D1y5hmU_Nwv0QqP9O8",
  "c_GvgSi5AmT1_JETaJcjIyEaCrQe3vAancW5UUEsXJs",
  "SAahSJNOsgM1aQY_IZknJNuoN8jpbssaqLVrqZp1nv4",
  "ALkUsZEwex1cq3XXhHHnJN7usEZy3E2NqQj15KPkjm8",
  "RCXLbLcAa_CPtoA3G4cwAA3LQCujwtdbeaWGlI68h14",
  "b2ciGEcqGmMgZhCVc--gfX-GdleSy_Y_kS6XVMiYqS0",
  "b02hJDb3SDqwKsjE0J5uraXVcgrykXGlqBHtc9hy1HE",
  "iEU49t59Hbab54-LtspMl-BwMavNL2iB20y-CXMx4Ww",
  "t1XrMEb1cX_p5HRP-m223OhHPrrl3WxJbhSpI__gs3M",
  "Y3wwqjntmjJ01_bV21EA-K50FxQvK5i1yd777i_6Nl0",
  "mu-iCTuWuuvZFz9wVVJ3qbTGc4_ZqZvE6Hu8Xpb8Euo",
  "m4tQEoZq7JfA_E1bUALAoR3GMlgjS6s9MUQng9BHhWw",
  "NvYRRYMuejbUKPgUjFhaPQpCIcVAVHwWsc5ZMReBcRw",
  "fgdWqM8PVTdcQ8x1oCjcv05CAJ5iyEU9cqZit4XfCLc",
  "zCBoFGPCEwGRSdv26B3ZNFDLwT5rKKb1mReam28axoA",
  "V3Z9eBMYv3HBqac9Dn0JzNHgxCPFKJnCvzNFXdlj0NE",
  "ytDg2biiSvDHn6KjEiHodK6esXaULhIfCNPFw3-lzAU",
  "01e9HlwMKBKTSXmv1pOf5pi20jJQFGcyKcn_hRM_O4o",
  "aDQnmevEWCeTfLKo38VSSsjdqvHUgRcMa08OyaSrE0s",
  "hJ-gRJuZd8t5p5Zhf1ElwW7LMfDAuQr3JlA14KdY__Y",
  "ph1WXVeaxxIkqti2aqST0iaNR7ZVDiOIvidtX2WodWE",
  "R5gATFdyiIg2z3y1HnceaLqMntM14nacFE1d4rTsJrE",
  "YABK6YQWHrM6JfYa-7kw6ds4y3FsYZsZyq6_J5ViZRg",
  "4mY7sPuYsSUfl7fGFD6kcahkslmLIDiTDQ6uWM6RBdo",
  "LOtVxywD3XJIfiCt1Iw3qaVvvq7JiaBR20zdoOvEaZM",
  "ZMDDqn1U2mLMyN0f2f4BqEzJHikjhxTREiapbrYcAWY",
  "VGhwoF3lluJ9xyvSXI06PzAw5RtC5cJsJ-tUviI3QiQ",
  "vTdo30adSJTl8xNE1bch_s5GBpXZy_xa72rYAHm0ayA",
  "pkbtF7YuHT4lyuznG8-5eY7QC_BTXkLAugFlvlMX92Y",
  "14BjHcZz75c1rCFbI3F37PzY5Ll4v9A2i6URN22tCWY",
  "d3zRx9E60o5BhBllzwFqFdtl0A9OGzKBKjimimFiEwI",
  "ATbHjizsGtvbsCEVdbIT8cTLaw3M0d3MeUTWzwGHTK0",
  "t3bZppHKHwjXJShiZlpYwYtQRzJX_Fim_IEShoJLicc",
  "Yazq-TW2adORV6Ep6_mms7j3PYknH0OdmushyYYx1FM",
  "SvrPu1R7OrFjffHMygeE-IzwLZyJUFCy831e306uGbg",
  "1bY-6BFamPJeKslzvVNHhbxcB9FUskWJGXzcEyeVsq8",
  "aVG1ovQe-_jk3GcSCoxDOEfmoOL82EVMS4sD6aYc0RM",
  "MAiNP0nawAubfFQaUVijJWBdZ1pei2LQaZshVkP8-c8",
  "KzOmtd8SyHy1tUQKN3W-o56Gy1wwKhMekLHD7Wrnb54",
  "GsjFxEYl6yBM3nC4R7a-4eYAckoSjtiDJUolg9lw9iU",
  "WB11jh9kg0mPxUh47egO9Hel3CiIOJmTn3yQKVI_GqQ",
  "Vc7LnvgRaJRihVLJvEwVqEJ9CPzhV7GU0V6wra9GeUw",
  "T6StlPlQdb-Wd0eoiR6_BXiizN-W9Nl6NF6o1xrC78s",
  "y4BjQzli-m4LULn7bNjpfaiKfVpBMPtJjJV2LWo_SaM",
  "SfDClNkxGiUcehYnQeXMXTN5Pz-IIYI_kzPA89SsLlQ",
  "OJZRb1VmCuq8jOXFdS3Yuvv4T4pxeZRH9g8nOHfImbs",
  "fia5BYbw7NeuSzz7FYo40ClPXLRRd6LoiXm2kxHXAmI",
  "mErAjy56v1IihEOF771F1mcW5cKneJYR0OW613hKOvA",
  "_gbYC-3Bwbjdb49AZqxh5HDzeVkwk9tCxW9sLoFeyzk",
  "xPFHZm_isUlERIA6lGETEAPFrmpo0HnUwo37RTMuTxE",
  "CCQMBvxKRezVx9mlMOpYHHR_b1s7yA5JK44ChAKkUX0",
  "w8bGG-abQccXBbgUXhZNd7KbMhlNU5vnTECvrrtPflc",
  "dnhxx-DS2VinagRe8QsMVj9mH8PkaUDlR4QQv_b0iq8",
  "voiWASIGqWcsbxdMiMDuNqi1H9-MOr6brDlvGpE8IIc",
  "Ss4iskf7baFn7c7lDvMBG-nDxeYtFLnwW7xNslHik-I",
  "u3fJo9uQ4RUMiqh4gz2cwfAHd1cHiNfnR9As46n7bt0",
  "Qmkq2pO7kyOR4KhpskViKqYe7CcP-uLF59EXDTH0PyU",
}

-- function Sleep(seconds)
--   local iterations = seconds * 100000000  -- Adjust the multiplier as needed
--   local sum = 0
  
--   for i = 1, iterations do
--     sum = sum + i
--     sum = sum - i
--   end
-- end

local target = "y1djswORh0K1d6K4vpCIRQNW-wD3JwejeL4Ch7Tua_Y" -- sender

-- local action = "GetWordPairingsEmbedders"
  
-- for _, txid in ipairs(txids) do
--     ao.send({
--       Target = target,
--       Action = action,
--       TXID = txid
--     })
--     print("Sent: " .. txid)

--     Sleep(2)
    
-- end

-- Send({Target = ao.id, Tags = { Load = "OtFpDrwJGKjvkfvZzfqFZz89jC9eI0Zyskn-y3zcEaA", Action = "Data"}})

local action2 = "AddToModel"
  
for _, txid in ipairs(txids) do
    ao.send({
      Target = target,
      Action = action2,
      TXID = txid
    })
    -- print("Sent: " .. txid)

    -- Sleep(2)
    

end

-- rasin ROPES Filena hab unemotional pioneer sportive piquant elmo great