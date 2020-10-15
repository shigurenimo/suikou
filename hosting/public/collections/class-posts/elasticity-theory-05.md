---
date: 2010/01/01
title_en: elasticity theory 05
title: 第5回　流体および弾性体の運動の新たな支配方程式
---

キーワード：運動方程式、Navier-Stokes 方程式、支配方程式

参考サイト：[http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965](http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965 "http://okinawa-repo.lib.u-ryukyu.ac.jp/handle/20.500.12001/19965")

できるだけ、式を用いず、言葉を用いて説明する。というのが、本講座の趣旨であるが、言葉だけでの説明では不安という方のために、そしてはやく結論を見せてほしいという方のために、提案される支配方程式と従来の支配方程式の比較を示すことにしよう。
しかし、方程式の形だけの比較では、無味乾燥である。当然ながら、本質はその奥深くにある物理の違いにある。その違いは、様々なことの瓦解に通じる。ぜひ、違いの醍醐味を味わって頂きたい。
天の楕円運行は、離心円を複雑に組み合わせることで、正確に予測することもできた。予測は楕円でも円でも殆ど同じ結果を与える。円には神通力があった。楕円にはなぜ楕円なのかを説明する必要性があった。両者の物理的世界観の違いはもはや語るまでもない。

![](/uploads/el-04.jpg)

\[ \]の項は、Newton の粘性法則に規定される粘性応力の寄与を表す。従来の支配方程式は、全ての流体に対し、体積粘性係数 を実験的に求めるかあるいは Stokes の仮説を導入し、Navier-Stokes equation を得るかのいずれかになる。しかし、ほとんどの流体に対し、体積粘性係数は求められていない。また、それを実験的に求めることも困難である。
Navier-Stokes equation の場合、運動の支配方程式が次元により異なり普遍性に欠ける。仲座の式は、通常の圧力下の通常の流体運動に対して、 粘性応力を規定する Newton の粘性法則に、第２粘性係数あるいは体積粘性係数の存在を認めていない。

![](/uploads/el-05.jpg)

\[ \]の項は、Hooke の法則に則る弾性応力の寄与を表す。従来の支配方程式は、圧力項の箇所に平均応力が入っているか、あるいは体積弾性係数の項が入っているかのいずれかになる。熱まで含めたエネルギー保存則では、この平均応力の符号を変えたものが圧力と見なされる。体積弾性係数を導入すると、全ての内部応力が Hooke の法則に規定され、等温状態を考えると、能動的に材料に変形を引き起こす内部応力を認めることができない。
また、次元変化に対し、普遍性を持たない。これに対し、仲座の式は、例え等温状態変化であっても密度変化に応じた圧力変動が能動的に材料に変形をもたらせることが可能である。また、熱力学の関係式を正確に導入できる。Hooke の法則に関わる弾性係数はただ１つとされる。次元変化に対し、普遍性を持つ。

\[ \]の項は、Newton の粘性法則に規定される粘性応力の寄与を表す。
従来の支配方程式は、全ての流体に対し、体積粘性係数 を実験的に求めるか、あるいは Stokes の仮説を導入し、Navier-Stokes equation を得るかのいずれかになる。しかし、ほとんどの流体に対し、体積粘性係数は求められていない。また、それを行うことも困難である。Navier-Stokes equation の場合、運動の支配方程式が次元により異なり普遍性に欠ける。
仲座の式は、 機械的粘性応力を規定する Newton の粘性法則に、第２粘性係数あるいは体積粘性係数の存在を認めていない。 なぜ従来の支配方程式に、１/３という次元数に関わる係数が存在するか？ その答えはすでに説明してあるように、圧力項に内部応力の平均値である平均応力を導入したからである。係数１/３を伴わない従来の式には、必ず第２の物性（粘性あるいは弾性）を表す係数として第２粘性係数や Lame の第２弾性定数が必要になる。
だが、その第２の物性に関わる係数とは何かの議論が Navier や Green の後、物理学者も巻き込んで、１世紀以上にもまたがり繰り広げられている。しかし、その結論はどこにも見ることができない。例えば、流体の場合、実験的に第２の物性に関わる第２粘性係数を求めたという記録はないようである。粘性と熱的内部過程に現れる非可逆的作用とは物理の特性が明確に異なることに注意を要する。こうして、状態量としての圧力と平均応力との違いは大きい。 従来の理論と提案される理論との物理的の違いとは何か？ 次回以降その違いについて説明していこう。