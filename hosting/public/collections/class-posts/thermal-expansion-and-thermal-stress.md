---
date: 1970/01/01
title_en: Thermal Expansion and Thermal Stress
title: 熱膨張と熱応力
---

参考サイト：[http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965](http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965 "http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965")

[http://data.jci-net.or.jp/data_pdf/31/031-01-1074.pdf#search=%27%E5%BC%BE%E6%80%A7%E4%BF%82%E6%95%B0+%E4%BB%B2%E5%BA%A7%E6%A0%84%E4%B8%89%27](http://data.jci-net.or.jp/data_pdf/31/031-01-1074.pdf#search=%27%E5%BC%BE%E6%80%A7%E4%BF%82%E6%95%B0+%E4%BB%B2%E5%BA%A7%E6%A0%84%E4%B8%89%27 "http://data.jci-net.or.jp/data_pdf/31/031-01-1074.pdf#search=%27%E5%BC%BE%E6%80%A7%E4%BF%82%E6%95%B0+%E4%BB%B2%E5%BA%A7%E6%A0%84%E4%B8%89%27")

Some examples of simulation results using _New Theory of Elasticity_ proposed by NAKAZA (2005) have been shown.

仲座の新弾性理論を用いて、弾性体の解析を行った事例を図ー１にご紹介いたします。

計算条件は、茶碗の内部の水が上層ほど高く、その状態に、さらに２本の指で茶碗を点圧縮した場合を想定。図は弾性応力の最大主応力（引張応力）分布です

![](/uploads/el-20.jpg)

The top is the stress distribution corresponding to the heat distribution. the bottom is the stress distribution governed by Hooke's law. Deployed the new theory of NAKAZA, Numerical simulation was done by Associate Professor Dr. J. Tomiyama.

これらの数値計算結果は、当時琉球大学工学部環境建設工学科（現在、社会基盤デザインコース）材料研究室の富山潤さんの協力を得て実施されたものです。詳細は、後の章で議論されます。潤さんに感謝です！

私が特に強調いたしたいのは、仲座の新弾性理論を用いるとき、温度の分布に沿う形に応力表示ができている点、そして指２本の力の作用、すなわち外力の作用による応力の分布が区別できるように、計算できているという点です。

従来の理論ならば、変形について、上述と同様な解析結果が得られたとしても、熱の分布に対応する応力はゼロであり、外部応力（境界の制限）に従う応力のみが存在することになります。

さらにもう少し説明すると、熱による膨張があり、その膨張が外部境界で制限を受けるので、その制限の効果を受けて内部に応力が発生する。この応力が従来の弾性学では、なぜか”熱応力”と呼ばれるのだが、それと外部の応力との和が、従来の理論では不可分的に解析されます。

私は、当初、温度の分布に従って現れる応力が存在し、それが熱応力であると考えていたのですが、調べてみると、そうでなく、熱で膨張した変形を外部から境界条件として制限することに応じて現れるのが熱応力であることを知りました。

これには驚きです。境界からの制限は、その境界から与えられた外力の効果であって、温度分布に対応する応力ではありません。

従来の弾性理論では、温度分布に対応したひずみがあることを認めているのに、こうして温度分布に対応する応力は存在しません。これを知った時は、唖然といたしました。

これと似ているのが、例えば、1 軸圧縮の際の横方向の変形です。変形は存在すれど、その変形の程度に応じた応力が存在しません。

木に竹を繋ぐという言葉がありますが、私には、従来の理論がそうした工夫をしているように思えてしかたありません。呪縛から抜け出すには相当な難儀を必要とします。

共に学びましょう！
