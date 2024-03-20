import re

# Sample input text, replace this with the path to your input file
input_text = """
ID                                          Size         Fee             Type                 Path
JjZZN-B11vnKI1-rs4LEex5YV0w0wKSHwL2Gg357kK0 204.19 kB    0.000256852862  application/json     chunk_10.json
XycSZ9KoVmLWsgasr-e5DEAtVQsoY-2j0RLznJzXolQ 192.97 kB    0.000256852862  application/json     chunk_113.json
hx5UZ3JUfDlxhd6CK0VUtOwkE9p_yfsFIyeXfGcpuPM 193.19 kB    0.000256852862  application/json     chunk_124.json
je4zQUCsRgyZlwZxHgHvt-yymFIivB-tb00wnaRwT3c 193.07 kB    0.000256852862  application/json     chunk_120.json
M6MTNvU6gtX7FaABWLGicwpn-599kLYzW0nc__1Say4 193.57 kB    0.000256852862  application/json     chunk_109.json
FE1ZoxErDFz1ohyPPUiWpDQmUdGsVIMeokjATSANk1Y 193.82 kB    0.000256852862  application/json     chunk_106.json
3yGmIZ3FBpujeUXFF4pivsGv93BWkwF9DzhrMVLCFgM 193.51 kB    0.000256852862  application/json     chunk_138.json
bGZJyBtfUk7CYPK9CtpJFpg3mFJBB5FCGs8Cq-tLbP8 193.55 kB    0.000256852862  application/json     chunk_111.json
rWsDkNExGTXtzejtqluz-fZETuwNVTr-ebL10WkNo2o 193.65 kB    0.000256852862  application/json     chunk_130.json
WloZbF_w1oW4DKEgelyaoSxzIFfs1Isu575DcFc3-_8 194.20 kB    0.000256852862  application/json     chunk_115.json
V4GhpPgwOfN5nh4xtdwoHDui2Fa3yy1bQ-dP9bs90hc 193.58 kB    0.000256852862  application/json     chunk_101.json
LednLjz-CUn7R8Vnx-8VRCAu8TbAfJwsjA1Bb-orBfk 194.03 kB    0.000256852862  application/json     chunk_117.json
uQ7G565AqzlTMmptB1YigUK2TdhXtEzGO5V1PL_NvTM 192.00 kB    0.000256852862  application/json     chunk_139.json
m5-Gi-U37TmqVcz8MERwNEsxLJmyAoiExdpNGzJCIXg 192.70 kB    0.000256852862  application/json     chunk_137.json
YV8xkZWKwjKcrTkA0Qi9-uNtcZX6ueMSErRP6XBeDE0 193.90 kB    0.000256852862  application/json     chunk_107.json
THtZ6brE-qS-eGJzAOOj4xduIln4l_oD3rX_BytRiIA 194.18 kB    0.000256852862  application/json     chunk_102.json
piA8w8yBGYacPrDRMrsg5284AZXjUWsc2C15MTTrHco 194.06 kB    0.000256852862  application/json     chunk_135.json
ZRCMudGRtE5ouBS9fR3u5IhdPzzffce-livAYRb1Pg0 193.42 kB    0.000256852862  application/json     chunk_149.json
56-1neI7bFdfaGY1fL30w-d0JmsR6Wu9fx_fVKPsxTQ 193.46 kB    0.000256852862  application/json     chunk_121.json
PVEphhktm8oH2KgXW2NIYXp-uNS5ajGqBWUorYVVwnk 202.69 kB    0.000256852862  application/json     chunk_26.json
S7pDPsa4v6qVoqgpayE9tcW5M6YzdnXz733flh2_Wes 193.38 kB    0.000256852862  application/json     chunk_153.json
wZD47g4PuNcj28n5eJZzdenNGoQl_VshJ18OvOKu7Sc 203.12 kB    0.000256852862  application/json     chunk_20.json
7RbJUQ0xb09MpIZyZEZXmmb2r4G3s-c5_l-ad0VZreY 218.01 kB    0.000256852862  application/json     chunk_0.json
mXysBf_wuDbUe631215mEad-KXBcClg_hKhcLaxf0og 194.35 kB    0.000256852862  application/json     chunk_104.json
Ng0pij0LNni5RxeCtWlUVzJJ1n69bGVM4TagfWUcFE8 192.87 kB    0.000256852862  application/json     chunk_143.json
8M6BBgIarG49jlC6Epvk7-4hlBjfwRN7nli0hTzNnCQ 194.13 kB    0.000256852862  application/json     chunk_122.json
c_n3q-Vwise2SeJXf7bMXS-IGAslQDV75ww1kh1lqKk 192.20 kB    0.000256852862  application/json     chunk_136.json
xUVjfBH1nxpy9NnTrOcXnOXtxf9kszYIzNkQUYwJUCA 192.43 kB    0.000256852862  application/json     chunk_146.json
BSJmI3nnFEyozbO7s8qOOE1ER5Mo8rAxhpv9ijR-Mns 196.62 kB    0.000256852862  application/json     chunk_69.json
cQEvV7Ixl-2STBtXHfcWkZjgq-EG6_AfodojEzYNDBo 201.34 kB    0.000256852862  application/json     chunk_55.json
MbKhKBPmh2jJ4s6fKSQBSfxyuXfiARz4MpNA6YJzAcs 193.34 kB    0.000256852862  application/json     chunk_142.json
ElEa9JPx-gy4MY8oZZLrAWmdY4FsbSpTKewq51yV5oQ 202.80 kB    0.000256852862  application/json     chunk_24.json
YSvuArPIS3_ZpbwAbpr3j0Np7CP7dV-g71qSmnZIzew 213.60 kB    0.000256852862  application/json     chunk_2.json
pLNKHbt4VRILn8Ooz7gqtsf3AmvAvxPtzpGfMaJgaAc 193.68 kB    0.000256852862  application/json     chunk_100.json
VqZDZn6nb3RIlqCLuZrXgw5-waYoax5eQsLX_LqSDQc 193.26 kB    0.000256852862  application/json     chunk_127.json
n42Qm3_ClnB9yPuB1xdPVSsXWoJbrYtvbvg5zKA322A 192.83 kB    0.000256852862  application/json     chunk_125.json
LmANbh3jeJ34Ltgk6jTc3-VouzHOTkduTMSYjOTz_Yk 193.32 kB    0.000256852862  application/json     chunk_147.json
DnvEZdB0QnrJ2zckPbrow53n_PN9s7rm65hj5jfXie8 194.52 kB    0.000256852862  application/json     chunk_77.json
vEUNPYmpdkx06PkhUCGfOCdGlZa-SEbb_7ZrN7Wa6Rw 192.02 kB    0.000256852862  application/json     chunk_148.json
qRjV09XrgFpwNl_cM70jRBLA5xaQYdlPZAJLn-8MU1A 193.47 kB    0.000256852862  application/json     chunk_110.json
LcYcxATil6jgLJBZ5dXhCUmDtV0biEjkpk_cnnuDMB4 193.72 kB    0.000256852862  application/json     chunk_112.json
UJHUBnCuZ4Bp7KvtREi9IXMbJUrZ3PsYVPH8w7CfGN8 203.20 kB    0.000256852862  application/json     chunk_16.json
bJ9vHFE4lv7BHVxWE7xtG_mHsSQjAdi4vk5ZDBSIrME 193.70 kB    0.000256852862  application/json     chunk_105.json
aepU05i0w7lZsBLNGvspFWirI0UyEFRhWTiWOFFGep4 193.24 kB    0.000256852862  application/json     chunk_114.json
DY6zklzQKwCOCKA1ZhncwDtMji_vnfzSmUXKVrHU6H0 203.65 kB    0.000256852862  application/json     chunk_15.json
U5YRYpvG8OPXekCU7ZzUWOV_f1qYeaDn_2P-vnDpGi4 203.69 kB    0.000256852862  application/json     chunk_14.json
15Q4Y6ggQJHxOPaZjm8Dq5xPY5Q4C7_VbWbt3KStyU0 193.83 kB    0.000256852862  application/json     chunk_129.json
dvMH36-gF4g3oRl6gHmqS1SQZSBDMYCWLfLJ8fNtkw4 193.27 kB    0.000256852862  application/json     chunk_123.json
TKotOGIyi1f1WugZSYQXGiFieMdUOfW6XIx7EbqT5Gs 192.24 kB    0.000256852862  application/json     chunk_134.json
-tUS-NM3mBRDw2ZSfCFJxSNqlp0N8FOaWTbWq13f5W0 193.08 kB    0.000256852862  application/json     chunk_119.json
LJfqAUOS5goKZOX-DEDm6oMrZ2rdBhY8IXl1IUD_RcM 201.48 kB    0.000256852862  application/json     chunk_41.json
5UOSjyjGXY90jcf98Ran0CsfZihrjAcN91HZ8o-qYMI 194.26 kB    0.000256852862  application/json     chunk_126.json
EphUrY-fHmOhFRHBbgxW8QdF_-3wfpVapFw6ydJ7lg0 201.51 kB    0.000256852862  application/json     chunk_48.json
c65QtF_3zh3IhuhsgU5cMojy7UWobXiqT1elqrR8LkA 203.92 kB    0.000256852862  application/json     chunk_13.json
DcQ-mFDh7b0CkOllyU6e0-zsGGLNhRRqYYeSTOHzhXI 18.02 kB     0.000256852862  application/json     chunk_156.json
ElxckiiUQwtPRzl-XSTvtmyslJl7lI31JGkzdEktV9I 204.31 kB    0.000256852862  application/json     chunk_11.json
sIOPDjQC218sykjVRvI4YTcdYVYECdhlGykZtnHAK-k 201.71 kB    0.000256852862  application/json     chunk_33.json
xaXDQ60YNaPrTEeJzMK4Ikpz1KPpho42xKFtGN7C7XE 204.39 kB    0.000256852862  application/json     chunk_12.json
v2PS3dSZOqMSvFYopMkEJxCzz3hhVz2-660l36a5yOY 202.63 kB    0.000256852862  application/json     chunk_21.json
OKVKl8pCyzBCYyS1-rEQSI1We578RbpRrEclABQcFGg 194.06 kB    0.000256852862  application/json     chunk_132.json
fdwuSPcq9d2sqPDkJZlLyE1CsVev_bNMpKJOKFFFkYQ 193.70 kB    0.000256852862  application/json     chunk_108.json
cZ02_4Ab6eEceY6h2XgXJiXgurOnzxyofo7qIRwglWk 192.58 kB    0.000256852862  application/json     chunk_131.json
cLeGaxx3-qEovxTDtr84o0SRSQjDybUssdeiAwpTfb4 202.51 kB    0.000256852862  application/json     chunk_22.json
XKoxjJqP8XRzmIkdKbga4uTD39vZSPXYk4XoBwTWbr0 193.28 kB    0.000256852862  application/json     chunk_116.json
x7gaw0HRc9vm5_lSRpFrScGZ3qigvOpMzbJ_zZ9s6B0 212.88 kB    0.000256852862  application/json     chunk_3.json
LNYidfJ6a_CftxmkfoRhc0-LzFkC269KI-bHKzUK880 212.18 kB    0.000256852862  application/json     chunk_5.json
fHG5Jbdv4cPV4YCTQpUXFQrRUeSekWUCXWqubcCzy4M 192.87 kB    0.000256852862  application/json     chunk_144.json
wMsk_pMa3g8GRlL8vT4CS9MJ8G9-2XnpOtPXh6YURMg 213.21 kB    0.000256852862  application/json     chunk_1.json
pdcdiGYhT67-psm1qPK0ek-u9Mb7jRNqVD3mqbvYtHU 193.76 kB    0.000256852862  application/json     chunk_140.json
Gfsxxzjq5x5UhTzUwFVSGu11--cxjSa5OfA0YZKVSzo 192.81 kB    0.000256852862  application/json     chunk_128.json
Ck0yHnD4bsoU6941TZoNuSDPIeBYsFP9fFJ-fiTD3F4 193.46 kB    0.000256852862  application/json     chunk_103.json
S8jksJ28kzA3gtNRYWSbRTXVnI1_-J5PhzH_LwKhjH0 201.48 kB    0.000256852862  application/json     chunk_39.json
f2SM0zvgcFzh-wVlNYjkg95YyldHOlNg9GhTFMzzDfk 192.30 kB    0.000256852862  application/json     chunk_141.json
IHTgUPnrh7peGcJCdZH4-kNrtvFz4vdpq2yuITYWgCw 212.54 kB    0.000256852862  application/json     chunk_4.json
ID5LFpvDIU0dFzLV0VWqlyURTJ5qsgimm1eEtHboUqg 201.20 kB    0.000256852862  application/json     chunk_50.json
P5Geewa6GGQ0LyqNjsegHI46G1nxpmEsXPXTJ4a7NiA 201.72 kB    0.000256852862  application/json     chunk_40.json
stnb8QnjUNqj3rQ2u3ibCxeV9dyRU15k_1dEPL82QI8 194.46 kB    0.000256852862  application/json     chunk_73.json
c8cgAdB3q_-sxzEHZJRvJf1Kb2z58ZvYEEDfO2Zp9ek 202.41 kB    0.000256852862  application/json     chunk_31.json
T-MrTBNjG7w1K87yfPVe0To4sLfM2CmdddNJd2D-hLA 202.11 kB    0.000256852862  application/json     chunk_27.json
i5P9jsrsEO6_eF2GviHBHRz-c8gO9qIXIDutf6RFVIg 194.44 kB    0.000256852862  application/json     chunk_90.json
wT8VneJMKQXBtzbr_-ITTyGuE3_3zd0NM9y0he4IXF4 201.45 kB    0.000256852862  application/json     chunk_57.json
1aj3eagZncIfK9vp2v742HDLrWJ7_JomQ95kC3RZ7sk 201.82 kB    0.000256852862  application/json     chunk_35.json
Fax8OLjFHa2wdv7HuDzuVPZJ-GyrtZ4RV-JjHmgWZKs 203.06 kB    0.000256852862  application/json     chunk_19.json
xMlehahUz-iv4S7CPMbSmAyNhLdahUWWoEmtRiU5u5I 193.34 kB    0.000256852862  application/json     chunk_145.json
POYiMqMvWjiL5nsPqCKy2S_egPE20jlyBoeiT7wNwKM 200.61 kB    0.000256852862  application/json     chunk_67.json
-zyqd8duW8w5-lBa131f9SHsSEJarVcMOMNV1UhTyjI 202.20 kB    0.000256852862  application/json     chunk_36.json
UkWbvx9MtnmyqTLKfnoEDL-6semMg3tj4QQS3zV6aRQ 194.87 kB    0.000256852862  application/json     chunk_79.json
n8J927DucoGL_rilj0l96m7JJ4sZIx1g8cANtfZcCCA 192.94 kB    0.000256852862  application/json     chunk_154.json
Ez4IPMSYVE5d_FJ7nhM-4YaJNYmJopuHoqDD0oPrXuM 201.93 kB    0.000256852862  application/json     chunk_37.json
6RPtoIzSTz3P-KJxphBHa8uxf9dsOJATNQDNlc3hth0 200.86 kB    0.000256852862  application/json     chunk_60.json
uaZi8qXjSMN6tMNGC54gABTvgd7YD3cIZ7riNFwc0WI 193.17 kB    0.000256852862  application/json     chunk_133.json
op5uHue6ZpzMU5Z1h0ii2pHESFf6w3KgNaY1AlZIvmY 194.40 kB    0.000256852862  application/json     chunk_84.json
k_QrG7guPs7-GHcOIn3DZZeYNGb_JZMaws-TfcgdqKg 193.58 kB    0.000256852862  application/json     chunk_118.json
u-7xXtJcD64znTQNnywcksp3uNWJSCYLflD85lkXh4c 203.13 kB    0.000256852862  application/json     chunk_18.json
5yxjcLj_qbQ9SoUqkKZsf68PxmEJsz-ltNF8b1KKhoQ 202.27 kB    0.000256852862  application/json     chunk_38.json
ycIbeA1MTmxJAUm4fS9t0S8MYn2lnsoRDiKwmtVNkU0 201.20 kB    0.000256852862  application/json     chunk_54.json
4ga7QT3vmGfXdppwQQYVWzjMO5weXw0EeETfywgfWpE 194.28 kB    0.000256852862  application/json     chunk_88.json
zT0ae_oRDWbkiMEIoArzPUqXPRRKygpcxU9a9EXd_Hs 191.84 kB    0.000256852862  application/json     chunk_150.json
2WgdFXDk9ItPAVhF-SaBHU4-fwaSX-dprdlKHzqe2ic 202.34 kB    0.000256852862  application/json     chunk_23.json
qMlUm_o3hIyJj95PzpNM6YA9s92Ita_FEziTUDUuszo 192.13 kB    0.000256852862  application/json     chunk_152.json
imIHsq_AUfTq2p4Rfy2OYpV18D1y5hmU_Nwv0QqP9O8 194.12 kB    0.000256852862  application/json     chunk_85.json
-bVDLoFh56DAV0xm6cv9hgL0MULL8l4WXSL1TaYfnTw 201.03 kB    0.000256852862  application/json     chunk_53.json
c_GvgSi5AmT1_JETaJcjIyEaCrQe3vAancW5UUEsXJs 203.42 kB    0.000256852862  application/json     chunk_17.json
SAahSJNOsgM1aQY_IZknJNuoN8jpbssaqLVrqZp1nv4 202.27 kB    0.000256852862  application/json     chunk_30.json
ALkUsZEwex1cq3XXhHHnJN7usEZy3E2NqQj15KPkjm8 202.25 kB    0.000256852862  application/json     chunk_34.json
RCXLbLcAa_CPtoA3G4cwAA3LQCujwtdbeaWGlI68h14 202.16 kB    0.000256852862  application/json     chunk_28.json
b2ciGEcqGmMgZhCVc--gfX-GdleSy_Y_kS6XVMiYqS0 204.58 kB    0.000256852862  application/json     chunk_9.json
b02hJDb3SDqwKsjE0J5uraXVcgrykXGlqBHtc9hy1HE 203.10 kB    0.000256852862  application/json     chunk_25.json
iEU49t59Hbab54-LtspMl-BwMavNL2iB20y-CXMx4Ww 201.36 kB    0.000256852862  application/json     chunk_49.json
t1XrMEb1cX_p5HRP-m223OhHPrrl3WxJbhSpI__gs3M 192.99 kB    0.000256852862  application/json     chunk_155.json
Y3wwqjntmjJ01_bV21EA-K50FxQvK5i1yd777i_6Nl0 193.74 kB    0.000256852862  application/json     chunk_89.json
mu-iCTuWuuvZFz9wVVJ3qbTGc4_ZqZvE6Hu8Xpb8Euo 200.90 kB    0.000256852862  application/json     chunk_59.json
m4tQEoZq7JfA_E1bUALAoR3GMlgjS6s9MUQng9BHhWw 193.96 kB    0.000256852862  application/json     chunk_97.json
NvYRRYMuejbUKPgUjFhaPQpCIcVAVHwWsc5ZMReBcRw 193.48 kB    0.000256852862  application/json     chunk_151.json
fgdWqM8PVTdcQ8x1oCjcv05CAJ5iyEU9cqZit4XfCLc 194.14 kB    0.000256852862  application/json     chunk_81.json
zCBoFGPCEwGRSdv26B3ZNFDLwT5rKKb1mReam28axoA 202.20 kB    0.000256852862  application/json     chunk_32.json
V3Z9eBMYv3HBqac9Dn0JzNHgxCPFKJnCvzNFXdlj0NE 200.68 kB    0.000256852862  application/json     chunk_65.json
ytDg2biiSvDHn6KjEiHodK6esXaULhIfCNPFw3-lzAU 194.14 kB    0.000256852862  application/json     chunk_75.json
01e9HlwMKBKTSXmv1pOf5pi20jJQFGcyKcn_hRM_O4o 204.81 kB    0.000256852862  application/json     chunk_7.json
aDQnmevEWCeTfLKo38VSSsjdqvHUgRcMa08OyaSrE0s 194.58 kB    0.000256852862  application/json     chunk_78.json
hJ-gRJuZd8t5p5Zhf1ElwW7LMfDAuQr3JlA14KdY__Y 193.62 kB    0.000256852862  application/json     chunk_96.json
ph1WXVeaxxIkqti2aqST0iaNR7ZVDiOIvidtX2WodWE 200.87 kB    0.000256852862  application/json     chunk_46.json
R5gATFdyiIg2z3y1HnceaLqMntM14nacFE1d4rTsJrE 193.92 kB    0.000256852862  application/json     chunk_94.json
YABK6YQWHrM6JfYa-7kw6ds4y3FsYZsZyq6_J5ViZRg 194.33 kB    0.000256852862  application/json     chunk_95.json
4mY7sPuYsSUfl7fGFD6kcahkslmLIDiTDQ6uWM6RBdo 201.29 kB    0.000256852862  application/json     chunk_45.json
LOtVxywD3XJIfiCt1Iw3qaVvvq7JiaBR20zdoOvEaZM 200.92 kB    0.000256852862  application/json     chunk_61.json
ZMDDqn1U2mLMyN0f2f4BqEzJHikjhxTREiapbrYcAWY 194.75 kB    0.000256852862  application/json     chunk_76.json
VGhwoF3lluJ9xyvSXI06PzAw5RtC5cJsJ-tUviI3QiQ 193.62 kB    0.000256852862  application/json     chunk_86.json
vTdo30adSJTl8xNE1bch_s5GBpXZy_xa72rYAHm0ayA 201.10 kB    0.000256852862  application/json     chunk_62.json
pkbtF7YuHT4lyuznG8-5eY7QC_BTXkLAugFlvlMX92Y 194.42 kB    0.000256852862  application/json     chunk_87.json
14BjHcZz75c1rCFbI3F37PzY5Ll4v9A2i6URN22tCWY 193.86 kB    0.000256852862  application/json     chunk_98.json
d3zRx9E60o5BhBllzwFqFdtl0A9OGzKBKjimimFiEwI 200.98 kB    0.000256852862  application/json     chunk_63.json
ATbHjizsGtvbsCEVdbIT8cTLaw3M0d3MeUTWzwGHTK0 193.98 kB    0.000256852862  application/json     chunk_99.json
t3bZppHKHwjXJShiZlpYwYtQRzJX_Fim_IEShoJLicc 193.83 kB    0.000256852862  application/json     chunk_91.json
Yazq-TW2adORV6Ep6_mms7j3PYknH0OdmushyYYx1FM 194.50 kB    0.000256852862  application/json     chunk_74.json
SvrPu1R7OrFjffHMygeE-IzwLZyJUFCy831e306uGbg 194.29 kB    0.000256852862  application/json     chunk_71.json
1bY-6BFamPJeKslzvVNHhbxcB9FUskWJGXzcEyeVsq8 201.71 kB    0.000256852862  application/json     chunk_51.json
aVG1ovQe-_jk3GcSCoxDOEfmoOL82EVMS4sD6aYc0RM 194.58 kB    0.000256852862  application/json     chunk_92.json
MAiNP0nawAubfFQaUVijJWBdZ1pei2LQaZshVkP8-c8 201.55 kB    0.000256852862  application/json     chunk_44.json
KzOmtd8SyHy1tUQKN3W-o56Gy1wwKhMekLHD7Wrnb54 200.63 kB    0.000256852862  application/json     chunk_56.json
GsjFxEYl6yBM3nC4R7a-4eYAckoSjtiDJUolg9lw9iU 206.90 kB    0.000256852862  application/json     chunk_6.json
WB11jh9kg0mPxUh47egO9Hel3CiIOJmTn3yQKVI_GqQ 201.21 kB    0.000256852862  application/json     chunk_52.json
Vc7LnvgRaJRihVLJvEwVqEJ9CPzhV7GU0V6wra9GeUw 193.76 kB    0.000256852862  application/json     chunk_93.json
T6StlPlQdb-Wd0eoiR6_BXiizN-W9Nl6NF6o1xrC78s 194.96 kB    0.000256852862  application/json     chunk_72.json
y4BjQzli-m4LULn7bNjpfaiKfVpBMPtJjJV2LWo_SaM 204.52 kB    0.000256852862  application/json     chunk_8.json
SfDClNkxGiUcehYnQeXMXTN5Pz-IIYI_kzPA89SsLlQ 194.39 kB    0.000256852862  application/json     chunk_83.json
OJZRb1VmCuq8jOXFdS3Yuvv4T4pxeZRH9g8nOHfImbs 194.78 kB    0.000256852862  application/json     chunk_70.json
fia5BYbw7NeuSzz7FYo40ClPXLRRd6LoiXm2kxHXAmI 194.52 kB    0.000256852862  application/json     chunk_80.json
mErAjy56v1IihEOF771F1mcW5cKneJYR0OW613hKOvA 201.68 kB    0.000256852862  application/json     chunk_43.json
_gbYC-3Bwbjdb49AZqxh5HDzeVkwk9tCxW9sLoFeyzk 200.73 kB    0.000256852862  application/json     chunk_64.json
xPFHZm_isUlERIA6lGETEAPFrmpo0HnUwo37RTMuTxE 201.14 kB    0.000256852862  application/json     chunk_47.json
CCQMBvxKRezVx9mlMOpYHHR_b1s7yA5JK44ChAKkUX0 201.16 kB    0.000256852862  application/json     chunk_58.json
w8bGG-abQccXBbgUXhZNd7KbMhlNU5vnTECvrrtPflc 36.00 Bytes  0.000256852862  text/html            index.html*
dnhxx-DS2VinagRe8QsMVj9mH8PkaUDlR4QQv_b0iq8 194.27 kB    0.000256852862  application/json     chunk_82.json
voiWASIGqWcsbxdMiMDuNqi1H9-MOr6brDlvGpE8IIc 202.28 kB    0.000256852862  application/json     chunk_29.json
Ss4iskf7baFn7c7lDvMBG-nDxeYtFLnwW7xNslHik-I 200.67 kB    0.000256852862  application/json     chunk_66.json
u3fJo9uQ4RUMiqh4gz2cwfAHd1cHiNfnR9As46n7bt0 201.79 kB    0.000256852862  application/json     chunk_42.json
Qmkq2pO7kyOR4KhpskViKqYe7CcP-uLF59EXDTH0PyU 200.80 kB    0.000256852862  application/json     chunk_68.json
"""

# Extract IDs using regular expression
ids = re.findall(r"\b[A-Za-z0-9-_]{43}\b", input_text)

# Format the IDs into the specified Lua table format
formatted_ids = 'local txids = {\n  "' + '",\n  "'.join(ids) + '",\n}'

# Output file path
output_file_path = "key_ids.txt"

# Write the formatted string to the file
with open(output_file_path, "w") as output_file:
    output_file.write(formatted_ids)

print("Formatted IDs have been saved to:", output_file_path)
