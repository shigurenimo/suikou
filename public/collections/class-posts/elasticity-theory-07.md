---
date: 1970/02/07
title_en: elasticity theory 06
title: 第6回 平均応力と偏差応力 mean stress and stress deviation
---

キーワード：フックの法則、平均応力等方応力、偏差応力、弾性係数、熱力学、状態量、圧力

新しい弾性理論は、従来の弾性理論におけるフックの法則の一般式を否定し、従来の耐力診断のための応力表示を正しくない、と指摘している、それは、学問的な議論はともかくも実務の面から聞き捨てならないことであろう。しかし、その実態は、材料の１軸圧縮問題を考えれば簡単に理解される事でなかろうか？
我々は、１軸圧縮の際、材料が横方向にいかように変形し、そして破壊していく場合であっても、材料はその方向に何らのストレスも受けていないと評価しているのである。実務者は、この事実を恐ろしい事だと思わずにいてよいのだろうか？
今回の内容は、少しばかりの式を用いて、従来の弾性理論の問題点を議論するものである。当然ながらこの議論は、流体力学における粘性応力の議論と軸を一つにする。

材料の変形と応力とに比例関係を認めると、フックの法則は一般に次のように書けよう。

![](/uploads/el-06.jpg)

この式の中で、σ（シグマ）は応力 ε（イプシロン）はひずみ（材料の相対的な変形量である）係数*C* は比例定数であり、一般には弾性係数と呼ばれる。

さて、従来の弾性理論は、式（１）を次のように、平均応力とそれからズレの成分である偏差応力とに分けられる。

![](/uploads/el-07.jpg)

「これでは、右辺は左辺と同じで、何をやっているのかわからない！」そのとおりである。でも、もう少し見て行きましょう。

式（２）の右辺第１項は平均値であるから一般には座標変換によって不変である。その結果、この項は等方応力とも呼ばれる。それに対し、第２項は非等方応力あるいは偏差応力と呼ばれる。これは、呼び方なので、どのような名前で呼んでもよいのだろうが、等方応力とか偏差応力とか、特別な名前で呼ばれると、何だかそれらが特別な物理的意味を持つのではなかろうかと錯覚してしまう。式（２）は、それが示すように、ただ平均値とそれからのズレの成分とに分けただけれあることに注意を要しよう。
ここで、式（２）の右辺第１項を次のように左辺に移動してみても殆ど意味をなさない。

![](/uploads/el-08.jpg)

以上に示すように、従来の弾性理論において、式（２）の右辺に示す各項を色々と移動してみても何ら意味も与えられない。
上の議論と本質的に同じ事であるが、従来の弾性理論は、ひずみを平均ひずみとそれからのズレの成分とに分けて、式（１）が次ぎのように表せるものと考えている。

![](/uploads/el-09.jpg)

ここに、ε バーは、ひずみ ε の平均値である。ここで係数*K*は体積弾性係数、_G_ はせん断弾性係数と呼ばれる。この場合も呼び方なので、どうでもよいだろうが、単に平均値とそれからのズレの成分とに掛かる係数と言い切ってしまうと、情けないものの言い方となってしまうだろうか？
よく考えてみると、式（４）において、ひずみの平均値と、それからのズレのひずみ成分とに、それぞれ異なる弾性係数が掛かるというのも不思議なことである。平均値が単に算術平均を表すものである以上、それら比例定数の物理的意味が問われることになるだろう。
当然ながら、上の論議と同様に、式（４）の右辺第１項を次のように左辺に移動してみてもあまり意味をなさない、両辺とも応力の平均値からのズレを表すのみであるし、両辺が等しいという意味合いしか表してくれない。
![](/uploads/el-10.jpg)

しかし、そうであっても、従来の弾性理論は、応力の平均値からのズレの成分である偏差応力を材料の降伏や破壊など物理現象の発生条件に用いており、それが材料固有の何らかの物理的特性を表すものでないかと考えているようである。式（４を次のように変形してみるとどうだろう。

![](/uploads/el-11.jpg)

あるいは、もう少し変形して

![](/uploads/el-12.jpg)

式（１）は、応力発生に関わる相対的変形量の全てがひずみ ε を以って表せると主張している。これに対し、式（７）の右辺第１項には、ひずみ ε に加えて平均ひずみ ε バーまで必要とされている。「応力発生に関わる相対的変形量の全てがひずみ ε を以って表せる」とする立場からは、「式（７）の右辺第１項は要らないはずだ！」と主張されよう。
Lame'は、式（１）の係数に対象性と等方性を適用して式（７）を得ている。当然ながら、「式（７）の係数 λ の物理は何なの？」と問われよう。だが、この問に、これまで誰も答えてきていない。
ここで「係数 λ の物理意味がわからない！」また、「係数 λ の項は余計なもののように思える！」という声が聞こえてきそうである。
それでは、式（７）の平均をとってみよう。

![](/uploads/el-13.jpg)

この式の括弧内の係数は、左辺に示す平均応力と平均ひずみを結ぶ比例定数であり、平均応力や平均ひずみが体積応力や体積ひずみと同義であるから、その比例定数の物理意味は、体積弾性係数を表すものであると定義されている。
だが、我々は、この比例定数が単に「平均応力と平均ひずみを結ぶものである」ことを忘れていない。
実は、式（７）は Lame'の与えたフックの法則を表す。式（７）に対して投じられた、「係数 λ の物理意味はなんなの？」というという問いに適切な物理的回答を与えることはできないが、その値だけなら、関係式*λ*＝*3K*-_2G_ を通し、_K_ と*G* の実測値から、求められる。
従来の弾性理論は、こうして平均値からのズレの応力成分を表す偏差応力に何らかの物理的意味合いを持たそうとするものであり、またその大きさを降伏条件や破壊条件にすえるものとなっている。
しかし、偏差応力とは何であったか？式（２）や（３）がその全てを語っている。
「係数 λ の物理的意味がわからない！」また、「係数 λ の項は余計なもののように思える！」新しい弾性理論では、それをそのとおりだあると考える。我々は、応力発生に必要な材料の相対的微小変形を表すにひずみ ε を加えて、その平均値を別に考える必要はない。したがって、応力と変形とが比例するという、フックの法則を表すだけなら、次のように書けることで十分である。

![](/uploads/el-15.jpg)

読者は、圧力*p* を左辺に移動してみたり、外力が作用しない場合を想定したり、あるいは熱を伴う場合を想定してみたり・・・と色々この式がどういう意味をもたらすか、上記の議論に沿いながら検討していただきたい。
平均とそれからのズレとで、物事を捉えようとしていた従来の弾性理論との違いの大きさに驚かされるに違いない。
次回以降、そのことについて説明することとする。
参考文献

1. 仲座栄三(2005)： 物質の変形と運動の理論 ボーダーインク 421p
2. Stephen P. Timpshenko (1983)： History of Strength of Materiaks, Dover Publications, 452p
3. Y.C Fung (1994)： A First Course in Continuum Mechanics, Third Edition, Prentice Hall, 311p
4. ランダウ＝リフシッツ（佐藤・石橋訳）(1972)： 弾性理論 東京図書出版 275p