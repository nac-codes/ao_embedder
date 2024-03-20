// readFileSync
import { readFileSync } from "fs";

import { message, createDataItemSigner } from "@permaweb/aoconnect";
import fs from 'fs/promises';



function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

const wallet = JSON.parse(
  readFileSync("/Users/chim/Documents/C6pd7xkPcp9JmCjM8U_v4DcU8_-jtzr4I1PI0B5ol5k.json").toString(),
);

// const test_vec = {
//     'phenprocoumon':[-0.0723,-0.0042,0.0583,0.1389,-0.0818,0.1056,-0.0149,0.0318,0.0044,0.0736,-0.0367,0.0275,-0.0194,0.0595,-0.0338,-0.0269,-0.0357,0.1884,-0.1727,0.0745,-0.0315,0.011,-0.0437,0.0342,0.0265,0.0289,-0.0253,-0.0015,-0.005,0.0669,-0.022,-0.0071,-0.0711,-0.0117,0.0134,-0.0641,0.1198,-0.0171,0.0772,-0.0349,-0.0038,0.1107,0.0414,0.0067,0.003,0.0023,-0.0189,0.0732,0.0135,-0.0738,-0.0556,-0.0483,-0.7774,0.1277,0.0166,0.028,0.0612,-0.0426,-0.0501,-0.0383,-0.0741,-0.0246,-0.0529,0.0964,-0.0144,0.0511,-0.0129,-0.0013,0.0497,-0.0015,-0.18,-0.0785,-0.0057,-0.0085,-0.0099,-0.0562,0.0084,0.027,-0.0026,0.054,0.0185,0.0042,0.0358,0.0754,0.035,0.0063,-0.109,0.0131,-0.0008,0.0231,0.0617,0.0249,0.019,-0.0407,-0.0003,0.0392,-0.0463,0.0528,0.0682,0.0616,0.0245,0.0937,-0.0424,-0.0271,-0.0349,-0.0242,-0.0157,0.0324,-0.0735,-0.0109,-0.0037,0.0177,-0.0303,0.0513,0.0592,0.0726,0.0334,0.0593,-0.0445,0.0929,0.0436,0.0988,0.0488,-0.0091,0.0552,-0.0194,0.0511,-0.0599,0.0188,0.1004,-0.0568,0.0179,0.0279,-0.008,0.0671,-0.0048,0.0067,-0.009,-0.0095,0.0055,0.0663,0.0132,0.0729,-0.0451,0.007,0.0351,0.0011,0.0668,0.0703,0.0137,-0.0188,0.0362,0.0188,-0.0456,0.0823,0.0118,-0.0733,-0.001,-0.0678,-0.073,0.0813,-0.017,-0.09,-0.0184,-0.0411,0.0039,-0.0518,-0.0998,-0.0046,-0.0382,0.0051,0.0059,-0.0208,-0.049,-0.0123,0.1171,-0.0014,-0.0214,-0.0153,0.0134,-0.1579,0.0247,0.0189,0.0843,0.0073,0.0444,-0.0198,0.012,-0.0207,0.0366,0.133,-0.0028,0.0501,-0.0423,0.0407,-0.0101,0.0105,-0.0022,-0.0419,0.0108,0.103,0.0936,-0.0058,0.0082,0.008,0.0314,-0.0025,0.1149,0.0854,0.0295,-0.0569,0.0527,-0.0451,0.0739,0.0756,0.0579,0.0821,-0.016,0.088,0.0166,-0.1018,0.1227,0.0547,0.02,-0.0876,0.0544,0.0809,-0.0464,-0.0122,0.0161,-0.0324,-0.0211,0.0055,0.1262,0.0449,0.0073,0.0498,-0.1415,0.0322,-0.0948,0.1041,0.0104,0.0354,0.002,-0.0091,-0.0336,-0.0899,-0.0395,0.0064,-0.1107,-0.0681,-0.0302,-0.0371,-0.0723,-0.0104,0.0272,0.0742,-0.0552,0.0446,-0.0874,0.027,-0.0298,-0.0959,-0.0595,-0.2474,-0.092,0.0229,0.0064,0.0367,0.0189,0.0912,-0.0039,0.0636,0.1269,0.0002,0.0366,0.0965,-0.0207,-0.0946,0.0366,-0.0243,-0.0477,-0.0364,-0.0848,0.0398,0.1144,0.0766,-0.0371,0.1238,0.0407,-0.0714,-0.0813,0.0839,0.0216,-0.0292,0.0037,0.0207,0.0815,0.0419,0.0462]
// };
// // Get word from test_vec
// const word = Object.keys(test_vec)[0];
// const vector = test_vec[word];




// Embedder mapping
const process_to_id = {
  // 'embedder_0' : 'bF78eBA2r8I7KT49vIwUeGzZSPESrnvepn0xrB5HBfY',
  // 'embedder_1' : 'C_npYCkHTKijgaHoClg599xx5nDHx9eWEYU-HzG4NX4',
  // 'embedder_2' : 'AcH8mTkS1askORHcR3Jm4Ip9iyCU9Xd7S7gFmhU41l0',
  // 'embedder_3' : '9p4qeiheGSpbMXUo5-Ff5XPx1O8kqeh9zmusRprcY0A',
  // 'embedder_4' : 'g4pYlzkE9dl8QrFa8WeBTl9TZkZn_xC4id7U4bcuyvM',
  // 'embedder_5' : 'vWqbIkMo02r549o_Ke9HqIGqBNAyE6EY9xjLENcTWiw',
  // 'embedder_6' : 'Ys3ykzbRyrKBwSMu4Wx00IuI9gMPYFUusuFvyG9DMNw',
  // 'embedder_7' : 'AnR4xB5yHnl5w68gru0ElL6tdNRctCRSNtX8if_iOyk',
  // 'embedder_8' : 'MDxuQn5t7y7QL1iCwW4naknh3fVNZ2Sqj7UGa7gd6rA',
  // 'embedder_9' : 'OXBzN7akYPT_DxP3yYvlm94WV-mquVQZWYzwu08Ocqg',
  // 'embedder_10' : 'cdf1AaGZPbqJryAMi-pgaCfQEGmA0qlh0CoVug-kr98',
  // 'embedder_11' : 'QHYhbdAC6AR8jYe7zKsr04XOB55-N3fYkMuvidtEDec',
  // 'embedder_12' : 'Vc1M5fTlaJloH8d6Kxorxe4ySzkXzz6n7JpYt0gQAXs',
  // 'embedder_13' : 'hDgcNo39SgnPHuNyZSo5-ACRGXGqUI_frtPIoW6UADY',
  // 'embedder_14' : '-IJZglCv-jhwYxGAB9LwbGlFEJqPH4Es0k4y1g5-o9c',
  // 'embedder_15' : 'dYco9BpQ3IaYuU9xyPboe-1IHB8aayl6KhaALwYytJ4',
  // 'embedder_16' : 'fqQCMWf4RfqHxY9wyz82EU9YOyuGK-SjAjMy_wo_UC8',
  // 'embedder_17' : 'RQ4oST27bCbsDaW7Sp0ET8RBXtvQr67xoJQgxaskVdI',
  // 'embedder_18' : '_FmvDLnDnC-ZsiNE2i_4LWP5P8vA95En1ysepsRUbEw',
  // 'embedder_19' : 'B_sAmxBO2hnRncZXLSZq64aYhS3DGeD2lJbxHvW0bc4',
  // 'embedder_20' : '4IOpLSCzrN6lD2WY8NpqKYNlfsrv8-sN7tUoWT84bcI',
  // 'embedder_21' : 'ijnxDJZNNzo5QklB05gAo8vQgxzrlk3zhs960NHBuS4',
  // 'embedder_22' : 'nw2RNKU2DPugf5OQRoh1XRXCvYvD2oaBfnv8IL_cR8w',
  // 'embedder_23' : 'O1dYZMREoVgMGRnpXi1PDgaaOttZxaFEf1aAd7j3My0',
  // 'embedder_24' : 'uLQNbP2_v9BrItKrF-wzJLgxukmrZianWhqLuowG84M',
  // 'embedder_25' : 'MUnWT5Cti4zvIhiTzKOYilnrQ0Mkm0irZoFyyXCga8w',
  // 'embedder_26' : 'qXn1vA7j-aJB93ip_0BIHhDZ4BvfpRLwaUsfdvZxZL0',
  // 'embedder_27' : 'wUZ-vLMbYtKxLWNE0Ozk-EC-OkiwGu_1U34P1_m4yAU',
  // 'embedder_28' : 'jIuaalc_K-74e4v2hr_Hi2mQylQGXhtYHw96t4ACngs',
  // 'embedder_29' : 'exUrvJDhs_N6mPPEngQJY6Xecs_qHxUAKC6jlDZO5b0',
  // 'embedder_30' : 'XRda6nagNk0buVBhfVEccvJ388NojxpfMAYVidPGnsk',
  // 'embedder_31' : '9V5XDOsZsB4ZTKBxIafbOkg3jCOIuQZ_d1xtC8LsNsM',
  // 'embedder_32' : 'rIn5DAmYPkojvgpdiB_YHEDrHky7S0Kkhd1XaUBK-yE',
  // 'embedder_33' : 'cF8SdrRR6AJQL5QiImmyGd8DWvZRMIc5n_-kbwvL4O4',
  // 'embedder_34' : 'NZyAkEgE8vddTY0eF_rg_dlx5NqfpRVDVFjrF45U_YA',
  // 'embedder_35' : 'qqwWhExPrvgDhviOLm5f92QdS8HijkAgep04KxgOcr8',
  // 'embedder_36' : 'ZNMcOM6aCr3s8GZDPs5dt0-1BKQ2wAYCsF7p9nRSvjQ',
  // 'embedder_37' : 'XogIbGx124xN7itcbWzWcHynu93ZAno6G5xblLPZN54',
  // 'embedder_38' : 'cDL5FvULAGlPvDOHPvcQCbbE6nBuGA9Q2w0CoP0S9BA',
  // 'embedder_39' : 'Zu2Zm-k1S09bkB9NtohyfBnuVw9cSt5zUFoOxEKpjB8',
  // 'embedder_40' : 'mCxTLYwdI6rBNeRfBSOE3FdrcO3ughWxZUWlLnqvccw',
  // 'embedder_41' : 'MxelM6DTKzeK-63BSZ4gCVn2dWjFUnCNxH249axtiLo',
  // 'embedder_42' : 'xykRLsYzOIt75lRct50Rf5CMJYNDV2TkGAA9WwUXVoM',
  // 'embedder_43' : '6O8-uGEOD1VhitEfIl3yPrmsEkR0QxCKEESXT05Q8gg',
  // 'embedder_44' : '_oDpCtp33lBP_9KK3tueL-d0Ap8OhWh3N8yfmcg0lNY',
  // 'embedder_45' : '-YNYB04rp8T_MrIKqBNgDfk_40rcZTS3gnBJKKp0rgs',
  // 'embedder_46' : 'd8Ju5td9EfXyCuV0418yoDZh6s6dMa7MfaqS_C6jEw0',
  // 'embedder_47' : 'Kdd6cnQdujnn45Us_d6VfsaZtKCwbV9YfVnaXfgV8qA',
  // 'embedder_48' : 'jdmRyfZJlzgOI342U27BIuDtE3EeWHRrsfeYGpf4rDA',
  // 'embedder_49' : 'YXVRXAIaD9fr6P5tN0UezElJ-wActx1qrLEVLOE73-I',
  // 'embedder_50' : 'xYTyRgTHQJJGNwgPpbJUaCwpX5BwYmrBiVCCWLs09tM',
  // 'embedder_51' : '3etWkYrf4q10-blbFqGOJHDTBeBos9uz3j8RqeudkDM',
  // 'embedder_52' : 'iyetuBCYKvNfeghVd2u8F_wUYzR3Of_ffRBv9NK4MDA',
  // 'embedder_53' : 'tUXXxxBqbSlAaepDQbhvR5_c-lIhLvh3piGEZayfLOY',
  // 'embedder_54' : '_OfNg6MzoO8KUOx05GiZzR38DtejCDaPd-DJidU-i9Q',
  // 'embedder_55' : '8JCua5DYie3q1lZFscs_V4EDv9UXt_MGFdQrYoooz6A',
  // 'embedder_56' : 'kAyKV6VOLCJfUxmgsB7I_lZxxRBqPqRuG90S18CmoCA',
  // 'embedder_57' : 'es_CP1BibSBjarUJGuXYR_mUtrckJ_qQSa0KaeeWGYs',
  // 'embedder_58' : 'u64i8ogl-Nr2exS8wobPtmrYbLb2o8ifqvf61EOkxHg',
  // 'embedder_59' : 'WL5ZG6DOUNb5dY7J0W-O1wCjLUUO59R5tgzKwxSUrdw',
  // 'embedder_60' : 'oT4gIQvuvcnSkBEIxOquMdvMSUf_Ueneit9UmpGdrKA',
  // 'embedder_61' : '2MXKpXkkrxvkYxF8dN-mZRQxWZ8YtPhyUxkjpG0XBxA',
  // 'embedder_62' : 'PAcCWNf8PXtvETLwHUQ__tooM0CJvw66E7CsfOr3ohQ',
  // 'embedder_63' : 'u2Dup8UYKCOTWIg1NuIvQhhFsFy2vbuNTIddtkvQeVY',
  // 'embedder_64' : 'dQIuok-podmHu-OWilsyxzW6w4ecRhmPC0nlVG81mbs',
  // 'embedder_65' : 'BPpUtRIxEUsKmwCLIyLGYRFdKyb3UF2QF9XhOJ5KAs8',
  // 'embedder_66' : 'ZnEvvHqW_jgU6WY3ofL-oPrpk1E9RLifPVuZ_PoPuSY',
  // 'embedder_67' : 'GKjj8jTT0aK-gNHBVKlH827WJCFdEc0VIoLcWARjRUE',
  // 'embedder_68' : 'XsM_Cxkpk64I2xtBvR3aPJ5HVZyhJkvhAfhi_dzCjhg',
  // 'embedder_69' : 'vtYs5X17kg0hWRmTXWn4LqjV8eTF2nLxl2Bwep6oFxs',
  // 'embedder_70' : 'rTFG5JLItVCBzYfnUAPACyMSyQXm9CpiGSH4aYWXx6M',
  // 'embedder_71' : 'RC_bgzcExUferQgNbqSSPtihDz6l9LilFDvW_uljWGk',
  // 'embedder_72' : 'tcB9RO0ShSIctZlCsldpnJvh5Z2RZt-a7t3h-HJLhyQ',
  // 'embedder_73' : 'FODTthKHEkUeO8BGxc6lz2Sw9fFMefmFCHWjMB9B2hQ',
  // 'embedder_74' : 'WUMZK1__FrE8HUjEoyoM4Us4QjtMcrYC3LA4C9ydOME',
  // 'embedder_75' : 'lpvaNjKXH-C43YL5n1LPkrxCMKPY1LYUmQs5uf2S6Ms',
  // 'embedder_76' : '3_NwZZvBuL4pvKSDBNXn7FOC-hiZAXIIwQQNu0v4mvY',
  // 'embedder_77' : 'Vw7V-s8GicCOs-3Dim2HIvHuIkdYwuhbdJbqOpwt5UU',
  // 'embedder_78' : 'HEu1DdhCzXuRzsQRe_Nyx1F_magEDR846YJRT9gVk6E',
  // 'embedder_79' : 'KDDQfjZfVmISNTYDn1f2A07p-_hjN40zM61VaR0z20Q',
  // 'embedder_80' : 'Tmmuv814gWYDozpaHOXAOzo4eGUs9axS9Y9JkueLf_k',
  // 'embedder_81' : 'do4B684jBdifFuXt7lNLlRoafYGzthcA5rsPkzex4zo',
  // 'embedder_82' : 'iIm_VHQ1ms2-03PgGlhjMt1kZiBKnbm2zSdik_Rtn70',
  // 'embedder_83' : 'HYZ2M5qIKhewSH4CDYDTTQuakizF978_aB1jrUcM7rc',
  // 'embedder_84' : 'ZiOn6sfb3DYtY8FTrsLctskgad5FIUWTyeCj8SGgVfM',
  // 'embedder_85' : 'O9CCj6lCJVsHhS8OEhovdSezUEMX7EhYmoEccOsnK-M',
  // 'embedder_86' : 'Rz1aV-7u1OZ9OS2sew_BEt03P4dE4qQ0Mfbf4Q_Jdz8',
  // 'embedder_87' : '0WkpVJQcJPADTWsijIs5bV_f7CCweWvObxmtfWxxe3I',
  // 'embedder_88' : 'x55FfTAXU6ORfBFevJd2C2PVbOYFWeMJrB0_86nNzyw',
  // 'embedder_89' : 'ULr1Z45mNvQTi7qjAMedtm4YjsRrl5B-N0o81MqOJHs',
  // 'embedder_90' : '1OFPm1Vo3xlZddihc_D6-2cnV9wK4I4tZ6XxrnDP_eA',
  // 'embedder_91' : 'guyFfeE6yH8XfuiVcjgu5gRfUl2uGP0t6PmCq9MI1RU',
  // 'embedder_92' : '9Tg-f9K6nomtbhrIyembFqmFEsOFrt09w9xBG7tezlM',
  // 'embedder_93' : 'i13aM4fUaYPHkoebuZEQWPek78s022oD-ta1Cp2hNJk',
  // 'embedder_94' : '4ooczrNjuJesK7F8ADWldkjFYCvCkWVg3x_0TVKAA64',
  // 'embedder_95' : 'YzYnkLXaV5XTTTxJ-gNnzVIMmMlTy_8r2ezvHgQj9vg',
  // 'embedder_96' : 'EmEZd6LqHpsFSqhLwlelnT9RB-l1jqpC66I1pvjjKug',
  // 'embedder_97' : 'ZIOUezzJow7g-37PFMziBk0CW_KEgxxl6DaY1tvr37Y',
  // 'embedder_98' : 'cpqMwOFIo3BMctKUj0cHTXMyOSmlJPuloCPnTojfTG8',
  // 'embedder_99' : 'xYbxiJGsYH14WTye0BuwQ53lJZGZ-NvJaCIyKasd0Ko',
  // 'embedder_100' : 'YIRbM6lwjb_yyVTZI_hXpFeeze3Fk0hqvx6G9h_UN-I',
  // 'embedder_101' : '9phszLTwbz3WH2hiM2W2_5WF9tGpUxSfwcmLmQlh2j4',
  // 'embedder_102' : 'd8gTOc9IVbFVDktMv3SOlnDOLPdMbuMj0qPN_l9rbxo',
  // 'embedder_103' : 'VFXh5fydaX9Ff3b4jNx78ZWl0adfBn3ausEnmxr72FA',
  // 'embedder_104' : 'Iz9SJCSux4BvC5aZcp4-LwXdr8e3d1fqTR7FyOXCb-o',
  // 'embedder_105' : 'jkMmvHTsGg7YXvqVC2fXkslKclKT1HUlzT0RN-SZ0DE',
  // 'embedder_106' : '_tWqU2q9AnqOzaVqA4ecfQA-R15JcmVPQl3szNtCPhM',
  // 'embedder_107' : 'svzbFayMI01kmy8N8FLGs8CozQfhNex2J6h2pfrLwLs',
  // 'embedder_108' : '-FUecYfDOIXViEqJHlw2ZP-6WNe677hNSiZCxiGr_EQ',
  // 'embedder_109' : 'XQkNHQwj9xNEuPu-_uaiXzu96_0tQf-Hq8tVlKNZW9k',
  // 'embedder_110' : 'mW5l57uN48gx-HO78FRX1JXOqyBLYAgOTNs-KDH6IEc',
  // 'embedder_111' : 'PKAW6MInY3YVg93cAlG8CMYCXhKo8hdwjKtZNUMQMXQ',
  // 'embedder_112' : 'hmRyAlhsq4zIuCHm2Dv1Z1R1wR1udyPwU_diHkEQ2d8',
  // 'embedder_113' : 'dOPhREc8mLNEyoMpVZTyrDGlh7jjsX1HXBv_vxhyXMk',
  // 'embedder_114' : 'rOuEO3uyLmgTp6GHZ3_I9r16WpakpYuEZUKhWZr6mpY',
  // 'embedder_115' : 'SVAx2Yuwj8otWYFOD2DLeFBH11oEDisvkWwRJI6yHZw',
  // 'embedder_116' : 'QR3-8hLFsNBFVZwgHYrV8tXCD5o8ilZg-u7oM_tGu5M',
  // 'embedder_117' : 'R8TDQdanSUQtjFmwE-nBj6d9RsHV9IPYAUaGSNKee3Q',
  // 'embedder_118' : 's64qqA0io75P5EZVtYk8Fjd7dqFupHt_uW2w4InHZ5Y',
  // 'embedder_119' : 'XZwCGH_X72Pzw8Lwf61BLAHaTSbX0876CNzPK5MkVdE',
  // 'embedder_120' : '5cXB1GnpHlgqi9l690nem0PzQlyHWLJM0NDHIp-mG2Y',
  // 'embedder_121' : 'MRhGqoB8D8DgWiBXDqvexzJg28cs0KJtta1JMGnrHJ4',
  // 'embedder_122' : 'kyOvXbgM2MOAaZTOFYKGkz0zxU2kofy-jbvY5CnLpkg',
  // 'embedder_123' : 'X5oFeQZZN50KwKXrW7tlIGX-PpSfUtP-6uvlKeHW4g0',
  // 'embedder_124' : 'Wx9ZdcaOGFzjiQ8pXt_48H0WZJUdBPZucugVC7jtKA4',
  // 'embedder_125' : 'mwnACNJDg7j6c5pinxxKRTW47an2OCefBckftphLogU',
  // 'embedder_126' : 'HTxGDo_DqoqR2N3A9DQPTDCIxk-TnGlLPUcH3srsLF8',
  // 'embedder_127' : 'lG3UzBN1KkxNjW-bq0doethM_lQ5MeyzslrQmzfyhS8',
  // 'embedder_128' : '-7LS3OtlCTVxX3tNm4q0ATwXkt1Og89hlTw13_5qhb0',
  // 'embedder_129' : 'LhBZXBrM46O0WnvLjCqq5hke3RAkJdAAKzmOWLniWws',
  // 'embedder_130' : '17uTsrkl_XykfLpWN8p-Tl64ABCD8y7g6jODKTlBkhw',
  // 'embedder_131' : '6-bmsi2K-3s0fmtdU2dskaFtAgjs-I3EpzimymsDu5I',
  // 'embedder_132' : 'RfzjcPqVqMn6S0CCiZArV6AKNPcs8UcVrGEDKRhnzZA',
  // 'embedder_133' : 'GkCcj11e2ww23UsM9uTryZ5hcCRaqKpvGVFtRsmT2Tc',
  // 'embedder_134' : '7QfXpts_2brB95f_3u9QGj5pY3e0fEcPkF6qgiAxk1U',
  // 'embedder_135' : 'vGQRJhwRk8n-z-huOs4hUyaR2ZkzS3ou0wsTFpQFQKo',
  // 'embedder_136' : '4FlSlJPvXxTcrnqISe9FC8EvvLgcIrClHutwaO392bo',
  // 'embedder_137' : 'FAYMcyyMes7w2F9D4p3HG7nUaBF-fi_CiFdCMGTBTnc',
  // 'embedder_138' : 'MYpud4uKD8pYRgcU-dEE6UBcxrOtLOunjoGV7pFsmYE',
  // 'embedder_139' : '9-iPMti39ALk5WqNn5JEoRfICjFr0LdHFaH42j4Qsn4',
  // 'embedder_140' : 'xCz_AAk9ePHh9aQEzF1jEghThKNXdDzTJRWGP4QPHos',
  // 'embedder_141' : 'izrG6RM2x26RBxyAyNSoPknJz_1M3vtD1t6-90FpuB8',
  // 'embedder_142' : 'f1p3KgMf1eeViA7z8TwCqjg094xQmRjo4FxMi4sbyYw',
  // 'embedder_143' : 'Ct0qAX1ATSBD7jGN2gjmWOQkq-CQU66ey3J0yt7NE0c',
  // 'embedder_144' : 'qKgTEiC65A6SQ33S_GCkW9CDQ0SEyab_KltyKg88IPs',
  // 'embedder_145' : 'WNrg2-dby7CzYhqVl59vROhlMr5DZBk0tMCFOazxq0o',
  // 'embedder_146' : 'kuO6jV2tWyNJf52QCYWsl8vDYNp46SfOus1Ir6yj6Xs',
  // 'embedder_147' : 'XppmAbyeaZzplR14N83bYvyKhUbPce7G_4I2ewbzgUw',
  // 'embedder_148' : 'zbE4I9bYU3tx7BXdLo0YCWUd9-k-b4kylFgFDdaJ8Ys',
  // 'embedder_149' : 'fxvdUvKSbH6ujDUzTjkGAC74aRjaEhQCYmkjuLIlIu4',
  // 'embedder_150' : 'NYHG2afduFDcZyNUjVIgWPfeXzeH1wY18mFd-AxsDqs',
  // 'embedder_151' : '0yJx7FhIsSsxRGtR8xmZHppnZh3vTEUwt5SOQs_ngu4',
  // 'embedder_152' : 'iqaE6I-wOcuIsfRTWsubwjB3k604DeMwh_x4IqV5py4',
  // 'embedder_153' : '391R_xkd32MjLAuxt5uuNlYT6NF_BCCIAU1sUHSvaPE',
  // 'embedder_154' : 'rCeik0U5nxZgobUQAPVumlM0NOPYU-c5SEhhL3MriQo',
  // 'embedder_155' : 'y_ENlYwUqiPt4yz2TnBzFkSPgDQ6WNWeGzvSchAtg9o',
  // 'embedder_156' : 'C_-cwkc-TYbprRSTULfNDGnniFYOaY-nQ4gLiW7FH34',
  // 'embedder_157' : 'dOFfIhXwRx17IgGkg643pTWWaSXefrANrPgIW339K0Q',
  // 'embedder_158' : 'W9eHkKfITeY5o1uDvvxpvyFh-oQyi3YyDiVkSTQf0Zc',
  // 'embedder_159' : 'DNKHS1SWBA6cKJ87GUd1IuCdaVsqaMZM_s7hkq6pQbA',
  // 'embedder_160' : 'imadJpxgIbstXZKNOLlltcPbX5gro28NmpqouIAZcaI',
  // 'embedder_161' : 'LZK_TkqEuaWT6k-61B_si81tdaJHeC8DU5C1LrON1nY',
  // 'embedder_162' : 'Ra6xeh6_D_0x6wK9LXSu7SRLQcQgZ226YC15NZjX2mw',
  // 'embedder_163' : '1RXH0G3HHflon7ftUCO8aERdtMywPBvdoRhksnmlAEc',
  // 'embedder_164' : 'FICuBtzfBc0wYrVSpc4a9P3wZpYBykpjplEL_PD0DXU',
  // 'embedder_165' : 'FielhkOvckv0sdL2QcFf6p8qjzkB4292Zs6gujv9KRs',
  // 'embedder_166' : '9yePHD2ZTl9Q6wFiBTLu89eCehzUHqMJXfqEqrwhGYU',
  // 'embedder_167' : 'TbDeWH90qPqqGxrao94S-MOIs0vSZgdQjOXOmqlXy40',
  // 'embedder_168' : 'hb6adIQV3xp41p-9weGCZxm_wM5Zy2dAoNJtWjAv4O0',
  // 'embedder_169' : 'ZpszT-7cOWC0jlS8RlogTdD2EBABSEg_wL5J4pVbcNM',
  // 'embedder_170' : 'JC4f65oGuRn1jC00n063UNe9J_Ov5L2nhDoQYySKhWQ',
  // 'embedder_171' : '_BGdYjV1vSe_-25UZi2xlp1Y6OTo7uO4LSDonBfEs1M',
  // 'embedder_172' : 'dH3muJTDTiyI6T7a4t4RxXGKPjiCZfi28bAEvpFwNEw',
  // 'embedder_173' : 'vsH_WPvzXYIxeueYnUgaJDtl2ZakAiZXNjN3KWbEoT8',
  // 'embedder_174' : '80zt-I0AHP14YGEqzBoAxLlDoFHPQvvXRteI4elBps0',
  // 'embedder_175' : 'Z3x7b8qzj1XldzBkupnLwb0eutey21_Y5kV8S_8muxo',
  // 'embedder_176' : '1JjoFXV1_RTEILHUYOj3-LfnadLcj65rWv2mL-szqIU',
  // 'embedder_177' : 'DJ6qqHMn5n3YpxrcJz2RF_yBgPTD5T-RKs4Mn1ySfp0',
  // 'embedder_178' : '3ANRA2oIaFiK80PFVIsKQ4FciQZhhW4rF_FUqgYOdQM',
  // 'embedder_179' : 'w95svW8L3MNArnewCt0svTbAbbF7fT5J66UhRsEvN48',
  // 'embedder_180' : 'dJXGLGjo-ZKDXvVSCwSsQfEQuQEXfmy3jbZa2yN0kIk',
  // 'embedder_181' : 'Ycx7HUFZUifMzH5R8pMx_p0KTF1HoXmUVwd_8xBXYks',
  // 'embedder_182' : 'vLRJqGlvOCp4PFxytTvBeTdSSYAoKcPUowWVRyDlJW4',
  // 'embedder_183' : 'GhRxOTK6FIyj4w0-HXxwOxwiDEPJ-ELVuCAWt1Iq8bU',
  // 'embedder_184' : '0FO83hS33qW2RKzVVljypcx2UKaMAOEOe1WyJ5xiIt0',
  // 'embedder_185' : '4fXl5YZ4Tjyv9MwRE6jkyxib0hh541mjqxyF7kPBbtc',
  // 'embedder_186' : 'uN-XGhDvJRjYLT4afrs8rYAqlN3sXYxHIMss6bW5xxk',
  // 'embedder_187' : 'L7N_niPfDAp2DZVPiiq4pQL7t9hM4JeH2fvEcCHsjoU',
  // 'embedder_188' : 'HlH0H7s-ixwlhlN17nxb1glohbaZWdYRZhh3WyD-pCA',
  // 'embedder_189' : '-FXXVx-AuwaHvgjply0nFZUbWTvwC6f-HpbAbhm_ZLM',
  // 'embedder_190' : 'SDQOXYmX50HCo4PJGAm2M8N4oaqG7JxyalVuiQkDSOc',
  // 'embedder_191' : 'oZWxjYEbn74qTw274HdpvyYzu-_cfVihkg4PeTHQ1tA',
  // 'embedder_192' : 'SVtw5gXibC5izvCZqoj5YlvxLG3D3IxQPEvGAI6XY0A',
  // 'embedder_193' : 'PCjN4BE3qnj3_M1ZG1W3EkoTgm5JI5etcaIT-ItXRYE',
  // 'embedder_194' : 'vb_4Il_Wb0nnsOxbdyZ-57yCYGuH2OOaw3a-SCO4_nw',
  // 'embedder_195' : '-lFCCy9IeLVMw93z7ObnwU26yM1ik4MP0EIGFLvaq_Y',
  // 'embedder_196' : 'xfGBPvBxjBstCuhxFkud5Ww-QLIQwMHcuKi3w_2TZw8',
  // 'embedder_197' : 'p_SQNkfAtU0RFSnxuSsN-XOfFQchWUmNGNPaLyBKsow',
  // 'embedder_198' : 'T7QqhgCROmhCo95BajROACOsuEccnGTxAgNBSuAoqLs',
  // 'embedder_199' : 'WO1BwGGll3lcpNNUqevhyPHLIIz2BdSKiGyBtVKNFcQ',
  // 'embedder_200' : 'kVdiKS0M7BB31cP0vda4bFun-_Rv05dXlPak95l4GCM',
  // 'embedder_201' : 'CEVGsOKn1Cf2gtuUU4sDlmcW_uTACBX9w90q6MsQLOg',
  // 'embedder_202' : 'TdlQDhAVgNy1l2hjB-vJPfPXfP9rzLN8csHww6LxVnA',
  // 'embedder_203' : '3RV_3kAujeceZ8cCNUq46DyntOIqtlyxnWjKrMcQLRM',
  // 'embedder_204' : 'PHIqS-XLyTDJ7SCrndt_fJoHyXlW8Kl9yDC6-SKuKL4',
  // 'embedder_205' : '53wAxMORFjk878a0A7aTXkbeNlzFCvnXf2QPEUkuxwY',
  // 'embedder_206' : 'RTutVVo6Idrpnv_qmXFLvV9tgqZYRgGHiP8FJqX5tWA',
  // 'embedder_207' : 'hB7HTubRHMLnbJmbC5t4bQ8SkrA607tlOBYw-rcbX-g',
  // 'embedder_208' : 'PA31HNrNX34iqOy62d66RxfSHgwnm7KAdyP6vkMalhs',
  // 'embedder_209' : 'EKIvj40wDzqNZAka8e8GLC7lyL50AxtopOVv00qOKrw',
  // 'embedder_210' : 'eayn437p6gKcKTj1VXzK9bpl1F0pTKVj7CEpUiHIfYo',
  // 'embedder_211' : 'L58DqzvPnBPH4yz2O4Y45bAaliY4BPAK5gzrYdJ3T4A',
  // 'embedder_212' : 'Ka5RxzM8_m4_YUxKSyHRymdC1gawlzLCVQLaJcVzSFg',
  // 'embedder_213' : 'KOrTde2WOS0ExO8yUFE-N34SciL2RsuECXBmhf25qkU'
  'embedder_proto' : 'XZllrzvpGSz52qQnmA_H-3q6OEz-jAl7-AfV0ZGRvik'
}

const sender_target = "R6sbmYI0Bdczu4KDm05zn1EJ92v2TiPvew5svsoCGPY";
const actionAddWordToSender = "AddWordToSender";
const actionAddWordToEmbedder = "AddWordToEmbedder";

// write a test function where only the test_vec is sent to the embedder
// async function testEmbedder() {
//   const embedderKeys = Object.keys(process_to_id);
//   let embedderIndex = 0;
//   const word = Object.keys(test_vec)[0];
//   const vector = test_vec[word];
//   console.log("Word: ", word)
//   console.log("Vector: ", vector)

//   const embedderKey = embedderKeys[embedderIndex];
//   const embedder_TXID = process_to_id[embedderKey];
//   console.log("embedder_TXID: ", embedder_TXID)

//   // Send word and its embedder txid to variable sender_target
//   await message({
//       process: sender_target,
//       tags: [
//         { name: "Action", value: actionAddWordToSender },
//         { name: "Word", value: word},
//         { name: "Embedder_TXID", value: embedder_TXID },
//       ],
//       signer: createDataItemSigner(wallet)
//     })
//       .then(console.log)
//       .catch(console.error);
  
//   // Send the word and its vector to the corresponding embedder
//   console.log(JSON.stringify(vector))
//   await message({
//       process: embedder_TXID,
//       tags: [
//         { name: "Action", value: actionAddWordToEmbedder},
//         { name: "Word", value: word},
//       ],
//       signer: createDataItemSigner(wallet),
//       data: JSON.stringify(vector)
//     })
//       .then(console.log)
//       .catch(console.error);

//   // Sleep for 100 milliseconds before processing the next word
//   await sleep(100);

//   // Move to the next embedder, or loop back to the first if at the end
//   embedderIndex = (embedderIndex + 1) % embedderKeys.length;
// }


// Example usage
// var vectorFilePath = path.resolve("/Users/chim/Documents/vectors_chunk_0.json");
// await loadVectorsAndProcess(vectorFilePath).then(() => console.log("Processing File 0 completed."));

// vectorFilePath = path.resolve("/Users/chim/Documents/vectors_chunk_1.json");
// await loadVectorsAndProcess(vectorFilePath).then(() => console.log("Processing File 1 completed."));

// Test usage
// testEmbedder().then(() => console.log("Processing completed."));

const baseDirectory = path.resolve("/Users/chim/Documents/vecs");

import { createWriteStream } from 'fs';
import path from 'path';

const outputPath = path.resolve("/Users/chim/Documents/my-arweave-app/pairings.txt");

// Create a stream for writing to the file, in append mode
const stream = createWriteStream(outputPath, { flags: 'a' });

// Function to append a word-embedder_TXID pair to the file
function appendPairToFile(word, embedder_TXID) {
  const pair = { word, embedder_TXID };
  stream.write(JSON.stringify(pair) + '\n'); // Append as JSON string + newline
}

// Example usage
function processWord(word, embedder_TXID) {
  appendPairToFile(word, embedder_TXID);
//   console.log(`Appended ${word}: ${embedder_TXID} to file.`);
}

// Don't forget to close the stream when you're done
function finishProcessing() {
  stream.end();
  // console.log('Finished appending all pairs to file.');
}

// Replace this with actual logic to call processWord for each word-embedder_TXID pair
// and call finishProcessing() when all processing is done


// Function to process each file
async function processFile(filePath) {
    
  const data = JSON.parse(await fs.readFile(filePath, { encoding: 'utf-8' }));
  

  const embedderKeys = Object.keys(process_to_id);
  let embedderIndex = 0;


  for (const word of Object.keys(data)) {
    
    const vector = data[word];
    const embedderKey = embedderKeys[embedderIndex];
    const embedder_TXID = process_to_id[embedderKey];

    // Send word and its embedder txid to variable sender_target
    // await message({
    //     process: sender_target,
    //     tags: [
    //       { name: "Action", value: actionAddWordToSender },
    //       { name: "Word", value: word},
    //       { name: "Embedder_TXID", value: embedder_TXID },
    //     ],
    //     signer: createDataItemSigner(wallet)
    //   })
    //     // .then(console.log)
    //     .catch(console.error);
    processWord(word, embedder_TXID);
    
    // Send the word and its vector to the corresponding embedder
    await message({
        process: embedder_TXID,
        tags: [
          { name: "Action", value: actionAddWordToEmbedder},
          { name: "Word", value: word},
        ],
        signer: createDataItemSigner(wallet),
        data: JSON.stringify(vector)
      })
        // .then(console.log)
        .catch(console.error);

    // Sleep for 100 milliseconds before processing the next word
    await sleep(1000);

    

    // Move to the next embedder, or loop back to the first if at the end
    embedderIndex = (embedderIndex + 1) % embedderKeys.length;
  }
}

async function main() {
    // Check if a file path was provided as an argument
    if (process.argv.length < 3) {
      console.log("Usage: node The_Sender.mjs <path/to/json_file.json>");
      process.exit(1);
    }
  
    const filePath = process.argv[2]; // The third item in process.argv is your first argument
    
    // Validate the file path
    if (!path.isAbsolute(filePath)) {
      console.error("Please provide an absolute path to the JSON file.");
      process.exit(1);
    }
  
    // Process the provided file
    await processFile(filePath);
  }
  
  // Call the main function to run the script
  main().then(() => finishProcessing());