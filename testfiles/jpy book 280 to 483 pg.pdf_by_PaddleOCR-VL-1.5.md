 $$ \phi\left(\mathbf{x}\right)=\left\{\begin{aligned}&1,&\sum_{i=1}^{n}x_{i}\geq k\  の時 \\ &0,&\sum_{i=1}^{n}x_{i}<k\  の時 \end{aligned}\right. $$ 

または、

 $$ \begin{aligned}\phi\left(\mathbf{x}\right)=&\left(x_{1}\cdots x_{k}\right)\coprod\left(x_{1}\cdots x_{k-1}\ x_{k+1}\right)\coprod\cdots\coprod\left(x_{n-k+1}\cdots x_{n}\right)\\=&\max\left[\left(x_{1}\cdots x_{k}\right),\left(x_{1}\cdots x_{k-1}\ x_{k+1}\right),\cdots,\left(x_{n-k+1}\cdots x_{n}\right)\right]\end{aligned} $$ 

 $$ \begin{aligned} 乙  乙  乙 ,x\coprod y=&\max\left(x,y\right)=1-\left(1-x\right)\left(1-y\right)\end{aligned} $$ 

となる。

##### 2）コヒレント構造

ある要素の状態がシステムの状態へ影響しない時，この要素はシステムの状態に無関係という.システムの状態を調べる時，考慮しなくてもよい要素ということになる.無関係とコヒレント構造に関する定義は，以下のようになる.

##### ☑定義 1（無関係 (irrelevant)）

要素 i が構造  $ \phi $ に無関係

⇔すべての $ (\bullet,\mathbf{x}_{-i}) $に対して， $ \phi(1_{i},\mathbf{x}_{-i})=\phi(0_{i},\mathbf{x}_{-i}) $

ここで，$\mathbf{x}_{-i}=(x_{1},\cdots,x_{i-1},x_{i+1},\cdots,x_{n})$ である.

要素 i が構造  $ \phi $ に無関係でなければ，関係がある (relevant) という.

##### ☑定義2(コヒレント構造)

システムがコヒレント(コヒレントシステム)

⇔(a) すべての x に対して構造関数  $ \phi\left(\mathbf{x}\right) $ が非減少関数

(b) すべての要素が無関係でない

##### 3）コヒレント構造関数の性質

コヒレント構造関数の持ついくつかの性質について、以下に説明する。

##### ☑性質 $ ^{①} $

構造関数$\phi\left(\mathbf{x}\right)$について,

 $$ \phi\left(\mathbf{x}\right)=x_{i}\phi\left(1_{i},\mathbf{x}_{-i}\right)+\left(1-x_{i}\right)\phi\left(0_{i},\mathbf{x}_{-i}\right) $$ 

が成立する。

この性質は構造関数の次元を逐次下げることにより，コヒレントシステムの構造関数を求めることができる．例えば，2つの要素からなる並列システムの構造関数は，

 $$ \begin{aligned}\phi\left(x_{1},x_{2}\right)=&x_{1}\phi\left(1,x_{2}\right)+\left(1-x_{1}\right)\phi\left(0,x_{2}\right)\\=&x_{1}+\left(1-x_{1}\right)\left[x_{2}\phi\left(0,1\right)+\left(1-x_{2}\right)\phi\left(0,0\right)\right]\\=&1-\left(1-x_{1}\right)\left(1-x_{2}\right)\end{aligned} $$ 

と求めることができる。

【說明】

要素の状態は２値変数により表されることと，

 $$ \phi\left(\mathbf{x}\right)=\left\{\begin{array}{l}\phi\left(1_{i},\mathbf{x}_{-i}\right),x_{i}=1 の時 \\\phi\left(0_{i},\mathbf{x}_{-i}\right),x_{i}=0 の時 \end{array}\right. $$ 

であるので, これらを一つにまとめて表現すれば, 性質①を導くことができる.

☑性質 $ ^{②} $

 $ \phi(\mathbf{0}) \geq \phi(\mathbf{1}) $ について,

 $$ \phi\left(\mathbf{0}\right)=0,\ \phi\left(\mathbf{1}\right)=1 $$ 

が成立する．ここで， $  \mathbf{0} = (0, \cdots, 0)  $， $  \mathbf{1} = (1, \cdots, 1)  $である．

この性質は，「すべての要素が故障していればコヒレントシステムは故障，すべての要素が機能していればコヒレントシステムは機能している」ということが，演繹的に導けることを意味している.

##### 【說明】

すべての要素が relevant であり，定義 2 の(a)より構造関数は x の非減少関数であるので，

 $$ \phi\left(\mathbf{0}\right)\leq\phi\left(\mathbf{1}\right) かつ \phi\left(\mathbf{0}\right)\neq\phi\left(\mathbf{1}\right) $$ 

が成立することから明らかである。

☑性質 $ ^{③} $

以下の不等式が成立する。

 $$ \prod_{i=1}^{n}x_{i}\leq\phi\left(\mathbf{x}\right)\leq\coprod_{i=1}^{n}x_{i} $$ 

この性質より，コヒレントシステムの構造関数の上限と下限は，それぞれ並列と直列システムの構造関数により与えられることになる.

【說明】

 $ x_{i}(i=1,\cdots,n) $は2値変数であるから，以下のことを示せばよい。

 $$  左边が 1\Rightarrow x_{1}=\cdots=x_{n}=1\Rightarrow\phi\left(\mathbf{x}\right)=1\Rightarrow\coprod_{i=1}^{n}x_{i}=1 $$ 

 $$  右边 \lim_{n\to\infty}0\Rightarrow x_{1}=\cdots=x_{n}=0\Rightarrow\phi\left(\mathbf{x}\right)=0\Rightarrow\prod_{i=1}^{n}x_{i}=0 $$ 

☑性質④

$$\mathbf{x}\coprod\mathbf{y}=(x_{1}\coprod y_{1},\cdots,x_{n}\coprod y_{n}),\mathbf{x}\bullet\mathbf{y}=(x_{1}\bullet y_{1},\cdots,x_{n}\bullet y_{n})$$ とすると，以下の不等式が成立する。

(a)

 $$ \phi\left(\mathbf{x}\coprod\mathbf{y}\right)\geq\phi\left(\mathbf{x}\right)\coprod\phi\left(\mathbf{y}\right)( 等号  は並列  システムの時 ) $$ 

 $$ \begin{aligned}(b)\quad\phi(\mathbf{x}\bullet\mathbf{y})\leq\phi(\mathbf{x})\bullet\phi(\mathbf{y})\qquad( 等号  は直列システムの時 )\end{aligned} $$ 

性質④の(a)の性質から，図6.3.1に示す直並列システムと並直列システムについて考えると，並直列システムが機能していれば直並列システムは機能していることになる．これは，図6.3.1からわかるように，直並列システムでは機能を果たす組み合わせが並直列システムに比べて多いことによる．なお，直並列システムは同じ機能を果たす要素を並列に結合し，次にシステムとしての機能を果たすために直列に結合しているシステムであり，並直列システムは直列に結合してから並列に結合しているシステムである．

##### 【说明】

φ(x)は x の単調関数であることに注意すれば, (a)については,

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//f4fd4d30-e4d6-40ed-8898-d074855b63de/markdown_3/imgs/img_in_image_box_135_204_456_393.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F3e17eb72936299e74db2d74eb380d19d12179608030e88ed76ecf9df7c009cf5" alt="Image" width="26%" /></div>


<div style="text-align: center;"><div style="text-align: center;">直並列システムの信頼性ブロック図</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//f4fd4d30-e4d6-40ed-8898-d074855b63de/markdown_3/imgs/img_in_image_box_472_201_785_388.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F603be1096926a1d5cbd9880b2c6d56fd219b5f3def99b49c87fbc70c09c444e0" alt="Image" width="26%" /></div>


<div style="text-align: center;"><div style="text-align: center;">並直列システムの信頼性ブロック図</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.1 並直列システムと直並列システム</div> </div>


 $$ \max\left(x_{i},y_{i}\right)=\left(x_{i}\coprod y_{i}\right)\geq x_{i},\forall i\Rightarrow\phi\left(\mathbf{x}\coprod\mathbf{y}\right)\geq\phi\left(\mathbf{x}\right) $$ 

 $$ \max\left(x_{i},y_{i}\right)=\left(x_{i}\coprod y_{i}\right)\geq y_{i},\forall i\Rightarrow\phi\left(\mathbf{x}\coprod\mathbf{y}\right)\geq\phi\left(\mathbf{y}\right) $$ 

より.

 $$ \phi\left(\mathbf{x}\coprod\mathbf{y}\right)\geq\max\left(\phi\left(\mathbf{x}\right),\phi\left(\mathbf{y}\right)\right)=\phi\left(\mathbf{x}\right)\coprod\phi\left(\mathbf{y}\right) $$ 

となる。

(b)についても max を min に置き換えることによって, 同様のアプローチで示すことができる.

##### (2) 構造関数の計算法

##### 1）分解法を用いた構造関数の求め方

前述の構造関数φの性質①を用いることにより，逐次的に次元(システムを構成している要素の数)の低いシステムの構造関数を求める問題に置き換えることができる．2つの要素からなる並列システムへの適用例で示しているように，逐次次元を下げることにより，一つの要素からなるシステムの構造関数を求める問題に帰着できる．

##### 2）パスとカットの概念を活用した構造関数の求め方

ミニマル・バスセット，ミニマル・カットセットの概念を取り入れると，構

造関数をよりエレガントに求めることができる。

##### ▪定義１（パスとカットの定義）

システムを構成している要素の集合  $ C=\{1,\cdots,n\} $ について，要素が故障しているか否かの状態に着目して，

 $$ C_{0}(\mathbf{x})=\{i\mid x_{i}=0\}：故障している要素の集合 $$ 

 $$ C_{1}(\mathbf{x})=\{i\mid x_{i}=1\}：機能している要素の集合 $$ 

を定義する。

① パスセット, パスベクトル, ミニマル・パスセット及びミニマル・パスベクトルの定義

システムの構造関数が  $ \phi(\mathbf{x})=1 $ の時, 状態ベクトル  $ \mathbf{x} $ はパスベクトルであるという. 対応する  $ C_{1}(\mathbf{x}) $ を, パスセットという.

状態ベクトル☒が,

 $$ \phi\left(\mathbf{x}\right)=1\mathrm{~ かつ }\forall\mathbf{y}<\mathbf{x},\phi\left(\mathbf{y}\right)=0 $$ 

を満たすとき, ミニマル・パスベクトルであるという. 対応する  $ C_{1}(\mathbf{x}) $ を, ミニマル・パスセットという.

② カットセット, カットベクトル, ミニマル・カットセット及びミニマル・カットベクトルの定義

システムの構造関数がφ(x)=0の時, 状態ベクトルxはカットベクトルであるという. 対応するC₀(x)を, カットセットという.

状態ベクトル☒がミニマル・カットベクトル∅(☒)=0かつ∀☒>☒∅(☒)=1を満たす時, ミニマル・カットベクトルという. 対応するC₀(☒)を, ミニマル・カットセットという.

##### 【例题 6.3.1】図 6.3.2 に示すブリッジシステムのミニマル・パスセットと

##### ミニマル・カットセットを求める例题

ミニマル・パスセットは，ブリッジシステムが機能するために最小限に機能していることが必要な要素の集合(すなわち，パスセット)であるから，

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//f4fd4d30-e4d6-40ed-8898-d074855b63de/markdown_4/imgs/img_in_image_box_0_1493_59_1677.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F6b8f24fdc708df0ca965e1f7e398c039b6ec172382058bc57f129c31f00feddd" alt="Image" width="4%" /></div>


 $$ P_{1}=\left\{1,4\right\},P_{2}=\left\{2,5\right\},P_{3}=\left\{1,3,5\right\},P_{4}=\left\{2,3,4\right\} $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//32bd8523-c06c-4e46-898e-292c4070773b/markdown_0/imgs/img_in_image_box_193_199_724_468.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A17Z%2F-1%2F%2Fb2e59ec720d375a823a7f5032d369d901d455227cffbace1f4e518715a78fd39" alt="Image" width="44%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.2 ブリッジシステム</div> </div>


となる。

ミニマル・カットセットはブリッジシステムが故障の状態にある時，必要最小限に故障している要素の集合(すなわち，カットセット)であるから，

 $$ C_{1}=\left\{1,2\right\},C_{2}=\left\{4,5\right\},C_{3}=\left\{1,3,5\right\},C_{4}=\left\{2,3,4\right\} $$ 

となる。

システムのミニマル・パスセットを  $ P_1, \cdots, P_n $，ミニマル・カットセットを  $ C_1, \cdots, C_l $ とする．この時，構造関数  $ \phi(\mathbf{x}) $ は以下のように表現することができる．ミニマル・パスセットをシステムの要素とみなせば，どれか一つのミニマル・パスセットが機能していればシステムは機能することになるので，

 $$ \phi\left(\mathbf{x}\right)=\coprod_{i=1}^{n}\rho_{i}(\mathbf{x}) $$ 

となる．また，どれか一つのミニマル・カットセットが故障していればシステムは故障していることになるので，

 $$ \phi\left(\mathbf{x}\right)=\prod_{i=1}^{l}\kappa_{i}\left(\mathbf{x}\right) $$ 

となる。ここで、

 $$ \rho_{i}(\mathbf{x})=\prod_{j\in P_{i}}x_{j}:i 番目のミニマル \cdot パスセットの構造関数 (i=1,\begin{aligned}&\cdots,n)\end{aligned} $$ 

 $  \kappa_i(\mathbf{x}) = \coprod_{j \in C_i} x_j  $ : i 番目のミニマル・カットセットの構造関数 ( $ i = 1, \cdots, l $)

である.

【例题 6.3.2】 ブリッジシステムの構造関数をミニマル・パスセットの構造関数で表現する例题

4つのミニマル・パスセットの構造関数は, それぞれ,

 $$ \begin{aligned}\rho_{1}(\mathbf{x})&=x_{1}x_{4}\\\rho_{2}(\mathbf{x})&=x_{2}x_{5}\\\rho_{3}(\mathbf{x})&=x_{1}x_{3}x_{5}\\\rho_{4}(\mathbf{x})&=x_{2}x_{3}x_{4}\end{aligned} $$ 

となる．したがって．ブリッジシステムの構造関数は．(6.3.1)式より．

 $$ \phi\left(\mathbf{x}\right)=\coprod_{i=1}^{4}\rho_{i}\left(\mathbf{x}\right) $$ 

となる. これは, 図6.3.3のように図解できる.

同様に, ミニマル・カットセットによるブリッジシステムの構造関数による表現は, 4つのミニマル・カットセットの構造関数が, それぞれ,

 $$ \begin{aligned}&\kappa_{1}(\mathbf{x})=1-\left(1-x_{1}\right)\left(1-x_{2}\right)\\ &\kappa_{2}(\mathbf{x})=1-\left(1-x_{4}\right)\left(1-x_{5}\right)\\ &\kappa_{3}(\mathbf{x})=1-\left(1-x_{1}\right)\left(1-x_{3}\right)\left(1-x_{5}\right)\\ &\kappa_{4}(\mathbf{x})=1-\left(1-x_{2}\right)\left(1-x_{3}\right)\left(1-x_{4}\right)\\ \end{aligned} $$ 

となるので、プリッジシステムの構造関数は、

 $$ \phi\left(\mathbf{x}\right)=\prod_{i=1}^{4}\kappa_{i}\left(\mathbf{x}\right) $$ 

となる．これは図6.3.4のように図解できる．

##### (3) コヒレントシステムの性質

要素 i の状態を示す確率変数を  $ X_{i} $ とする.  $ X_{i} $ は 0 と 1 の 2 つの値しかとら

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//32bd8523-c06c-4e46-898e-292c4070773b/markdown_2/imgs/img_in_image_box_165_202_649_511.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A18Z%2F-1%2F%2F07ed188f5652d36e1123cb60e02025cacc8dba60cec5f66ecedee503483b8b20" alt="Image" width="40%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.3 ブリッジシステムのミニマル・パスセットによる表現</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//32bd8523-c06c-4e46-898e-292c4070773b/markdown_2/imgs/img_in_image_box_59_609_753_819.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A18Z%2F-1%2F%2Ff784c961a8e5f5cb11dc6344c69a5d85d16c0e7f418fcfab80243c8c7062d285" alt="Image" width="58%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.4 ブリッジシステムのミニマル・カットセットによる表現</div> </div>


ない二値確率変数であるので， $ p_i=E(X_i) $とすれば，その期待値は，

 $$ E\left(X_{i}\right)=1\times p_{i}+0\times\left(1-p_{i}\right)=p_{i}=P\left(X_{i}=1\right) $$ 

となり，1の値をとる確率すなわち信頼度に等しい。この性質を用いることで，構造関数からコヒレントシステムの信頼度を求められる。すなわち，$\mathbf{X}=(X_{1},\cdots,X_{n})$ を $n$ 個の要素の状態を示す確率変数ベクトルとすれば，コヒレントシステムの信頼度は，

 $$ P\Big[\phi\left(\mathbf{X}=1\right)\Big]=h=1\times h+0\times(1-h)=E\Big[\phi\left(\mathbf{X}\right)\Big] $$ 

となる。

 $ X_{1}, \cdots, X_{n} $ が互いに独立ならば, システムの構造関数が(6.3.1)及び(6.3.2)式で表現できることと, 2値確率変数のべき乗の期待値について,

 $$ E(X_{i}^{m})=E(X_{i})=p_{i}=P(X_{i}=1)\qquad(m は正の整数 ) $$ 

が成立するので、コヒレントシステムの信頼度は

 $$ h=h\left(\mathbf{p}\right)\qquad\left(\mathbf{p}=\left(p_{1},\cdots,p_{n}\right)\right) $$ 

と要素の信頼度の関数として表現できる。すなわち、要素の信頼度がわかればコヒレントシステムの信頼度を求めることができる。

1) コヒレントシステムの信頼度の性質

コヒレントシステムの信頼度の性質として，以下が重要である

コヒレントシステムの信頼度は，構造関数の性質①より

と求めることができる。

 $ h(\mathbf{p}) $は  $ 0 \ll \mathbf{p} \ll 1 $ の各  $ p_i $ について非減少関数である.

システム信頼度 $h(\mathbf{p})$ の $p_{i}$ についての偏微分が

 $ \frac{\partial h}{\partial p_i}=h(1_i,\ \mathbf{p}_{-i})-h(0_i,\ \mathbf{p}_{-i})=E[\phi(1_i,\ \mathbf{x}_{-i})-\phi(0_i,\ \mathbf{x}_{-i})]\geq0 $

となることより、明らかである。

2) コヒレントシステムの信頼度の計算法

① 分解法によるコヒレントシステムの信頼度の求め方

コヒレントシステムの信頼度の性質①より構成要素数の次元を，逐次1次元

ずつ低減することで，システム信頼度を求めることができる.

【例题6.3.3】2つの要素からなる並列システムの信頼度を分解法で求める

##### 例题

コヒレントシステムの信頼度の性質①を逐次適用することにより、以下のように並列システムの信頼度を求めることができる。

 $ h(p_1, p_2) = p_1 h(1, p_2) + (1 - p_1) h(0, p_2) $

#####  $ =p_{1}+(1-p_{1})p_{2}h(0,1)+(1-p_{2})h(0,0) $

 $ =p_1+(1-p_1)p_2 $

 $ =1-(1-p_1)(1-p_2) $

##### ② ミニマル・パスセット，ミニマル・カットセットによるシステム信頼度

コヒレントシステムの構造関数の(6.3.1)と(6.3.2)式による表現に注意すればシステム信頼度$h(\mathbf{p})$は

 $ h(\mathbf{p})=E\left[\prod_{i=1}^{n}\prod_{j\in P_{i}}X_{j}\right] $ （ミニマル・パスセットによる方法）

 $ h(\mathbf{p}) = E\left[\prod_{i=1}^{l} \prod_{j \in C_i} X_j\right] $ （ミニマル・カットセットによる方法）

となる．すなわち，(6.3.4)式の2値確率変数の期待値の性質を用いて上式の右

辺の期待値を求めることにより，システムの信頼度が得られる．

##### (4) システム信頼度関数の形状

大きさ1のパスセットがなく，かつ大きさ1のカットセットがなければ，システム信頼度$h(p)=h(p,p,\cdots,p)$ の形状はS字形になる．すなわち，要素の信頼度がすべて等しく$p_{1}=p_{2}=\cdots=p_{n}=p$ とすると，

#####  $ h(p_0) = p_0 $

を満たす $h(p)$ の不動点 $p_{0}$ が $0 < p < 1$ に存在して, $h(p)$ の形状は図 6.3.5 に示すように $S$ 字形になる.

したがって，$h^{2}(p)=h(h(p)),\ h^{3}(p)=h(h^{2}(p)),\ \cdots$ とすると，

であり、この形状は図6.3.6に示すグラフのようになる。

【例题6.3.4】$h(p)$ の不動点 $p0$ が $0 < p < 1$ に存在するか否かの例題

図6.3.7 のコヒレントシステムで $E(X_{i})=p(i=1,2,3)$ とすると，その信頼度

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_0/imgs/img_in_chart_box_365_208_748_629.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A17Z%2F-1%2F%2Fc12e944d0695b98363b4e6a49a0b928a230323ac278efddbaff791692e74bd26" alt="Image" width="32%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.5  $ h(p) $ の S 字形の形状</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_0/imgs/img_in_chart_box_361_741_739_1121.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A17Z%2F-1%2F%2F8a4e02e3fb10d86470af45d50cecc4eb492b9b89e3b21c782b7065628efd7426" alt="Image" width="31%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 6.3.6 不動点  $ h(p_{0}) = p_{0} $ が依存する時の  $ \lim_{n\to\infty}h^{n}(p) $ のグラフ</div> </div>


 $ h(p) $は,

 $$ h\left(p\right)=p\left[1-\left(1-p\right)^{2}\right] $$ 

となる。

これより， $ h(p_0)=p_0 $となるのは $ p_0=0 $または1であり， $ 0<p<1 $の区間に $ h(p_0)=p_0 $となる不動点 $ p_0 $は存在しないことがわかる。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_1/imgs/img_in_image_box_249_209_690_448.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A17Z%2F-1%2F%2F128072f0c3986457b84c98fc997ead1d17592184565fc353d3231711c96faaeb" alt="Image" width="37%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.3.7 ３つの要素からなるシステム</div> </div>


### 6.4 修理系をともなうシステムの信頼性

##### (1) 修理系をともなうシステムのアベイラビリティ

多くの要素から構成されるシステムは，故障すればその原因を明らかにして，故障している要素を特定して交換するなどの対策を行って復元・再使用（あるいは，再稼働）する使い方をする場合が多い.

故障後復元するまでの時間が修理(あるいは修復)時間で，修理時間が短ければシステムが停止している時間は短くなる．修理系を有するシステムの解析モデルの一つで最も簡単な「修理系のある単一システム」を，図6.4.1に示す．故障すれば修理系に回して修理し，修理すれば稼動状態に復帰するこのシステムの解析について考えてみよう．

##### １）状態推移のタイムチャート

システムの状態は時間 $t$ とともに変化し, 状態は「機能を果たし稼働している状態」と「故障して修理している状態」の 2 つの場合を考えればよい.

故障すれば修理の状態へ推移し，修理が完了すれば機能を果たす状態に戻るので，時間とともに状態が推移する様子は，図6.4.2のようになる.

図6.4.2のように状態が推移するシステムでは，使用したい時に使用できる「アベイラビリティ」の情報が大切である．これについては，確率過程の知識を用いることにより以下のようにアベイラビリティを求めることができる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_2/imgs/img_in_image_box_331_214_735_504.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A18Z%2F-1%2F%2Fb6e1fe91941d9f3052006e2b1234eb1dbc2026bd83b548bc990926ff94f6677b" alt="Image" width="33%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.1 修理系のある単一システム</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_2/imgs/img_in_image_box_207_614_848_923.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A18Z%2F-1%2F%2Fe38d03c9189b107edf62e44f203e6c98b86bea84bad128037593515eeb912a70" alt="Image" width="53%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.2 修理系のある単一システムの状態推移図</div> </div>


##### 2）アベイラビリティの具体的な表現

以下のように記号を定義する。

 $ F(t) $ : 故障までの時間の分布  $ (f(t) $ は  $ F(t) $ の密度関数 $

 $$ \bar{F}(t)=1-F(t) $$ 

 $ G(t) $：修理時間の分布 $ (g(t) $は $ G(t) $の密度関数 $

 $ X(t)=\left\{\begin{array}{ll}0,& システムが修理の時 \\ 1,& システムが機能している時 \end{array}\right. $

 $ A(t) $：時間  $ t $ でのアベイラビリティ

 $ U(t) $：時間  $ t $ までの総稼働時間

 $ D(t)=t-U(t) $：時間  $ t $ までの総ダウンタイム

時間 $l$ で稼働している確率であるアベイラビリティの解析では, 以下に示すように,

•  $ (0, t) $ で無故障の時

•  $ (0, t) $ で少なくとも 1 回故障している時

という排反な２つの事象に分割して考える．事象を分割すれば．アベイラビリティはそれぞれの事象の確率の和として求めることができる．

(a)  $ (0, t) $ で無故障の時

この確率は， $ \bar{F}(t)=1-F(t) $ である.

(b)  $ (0, t) $ で少なくとも 1 回故障している時

使用開始後 $x$ 時間で最初に故障し，$y$ 時間後には修理が完了して時間 $(x+y)$ では復元し，その後 $t-(x+y)$ 時間後の時間 $t$ で機能を果たしている事象は，図 6.4.3 のように表すことができる。

微少区間 $ (x,x+dx] $で故障する確率は，

 $$ f(x)dx=dF(x) $$ 

であり、その後微少区間 $  (y,y+dy]  $で復元する確率は、

 $$ g(y)dy=dG(y) $$ 

である．また，時間 $ (x+y) $で復元して残り $ t-(x+y) $時間経過して機能している確率は，

 $$ A\left[t-(x+y)\right] $$ 

となる．したがって，「(0,t)で少なくとも1回故障し時間tで機能している確率」は，

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9bd1096d-4d08-433f-9618-733b63c55e66/markdown_3/imgs/img_in_image_box_59_1326_980_1449.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A19Z%2F-1%2F%2Fafbc8f52163bdde3f308a9f67fadc6e6df38bf8a2d856e09ed1af9882f3bc7db" alt="Image" width="77%" /></div>


<div style="text-align: center;"><div style="text-align: center;">☑ 6.4.3  $ (0, t) $ で少なくとも 1 回故障し時間で機能を果たしている事象</div> </div>


 $$ \int_{0}^{t}\left[\int_{0}^{t-x}A\left(t-x-y\right)dG\left(y\right)\right]dF(x) $$ 

となる。

よって, 時間  $ t $ におけるアベイラビリティは,

 $$ A\left(t\right)=\bar{F}\left(t\right)+\int_{0}^{t}\left[\int_{0}^{t-x}A\left(t-x-y\right)dG\left(y\right)\right]dF(x) $$ 

となる

3）ラプラス変換によるアベイラビリティの求め方

ラプラス変換の世界ではアベイラビリティを具体的に表現することができ.

$t\rightarrow\infty$ の場合の定常状態における性質を明らかにすることができる.

 $ \bar{F}(t) $， $ \bar{G}(t) $， $ \bar{A}(t) $のラプラス変換を，それぞれ，

 $$ L\left\{\bar{F}(t)\right\}=\int_{0}^{\infty}e^{-st}\quad\bar{F}(t)dt=\tilde{\bar{F}}(s) $$ 

 $$ \left[\begin{array}{c}L\left\{F(t)\right\}=1/s-\tilde{F}(t)\\ \because\int_{0}^{\infty}e^{-st}dF(t)dt=s\int_{0}^{\infty}e^{-st}F(t)dt\\ =s\int_{0}^{\infty}e^{-st}\Big(1-\overline{F}(t)\Big)dt\\ =s\Big[1/s-\tilde{\overline{F}}(s)\Big]=1-s\tilde{\overline{F}}(s)\end{array}\right] $$ 

 $$ L\left\{\bar{G}(t)\right\}=\int_{0}^{\infty}e^{-s t}\bar{G}(t)d t=\tilde{\bar{G}}(s) $$ 

 $$ L\left\{A(t)\right\}=\int_{0}^{\infty}e^{-st}A(t)dt=\tilde{A}(s) $$ 

として，(6.4.1)式の両辺をラプラス変換すれば。

 $$ \tilde{A}\left(s\right)=\tilde{\bar{F}}\left(s\right)+\tilde{A}\left(s\right)\left\{1-s\tilde{\bar{F}}\left(s\right)\right\}\left\{1-s\tilde{\bar{G}}\left(s\right)\right\} $$ 

となる. これを A(t) のラプラス変換  $ \tilde{A}(s) $ について解けば.

 $$ \tilde{A}(s)=\frac{\tilde{\bar{F}}(s)}{s\left\{\tilde{\bar{F}}(s)+\tilde{\bar{G}}(s)-s\tilde{\bar{F}}(s)\tilde{\bar{G}}(s)\right\}} $$ 

となる。

## 4）故障時間，修理時間がともに指数分布のときのアベイラビリティ

ラプラス変換による(6.4.3)式の表現を逆変換してアベイラビリティ A(t)を求めることは一般には難しい．故障時間，修理時間がともに指数分布の時には，逆変換は以下のように求めることができる．故障率がλ，修理率をμとすると，

 $$ \bar{F}(t)=e^{-\lambda t},\quad\bar{G}(t)=e^{-\mu t} $$ 

となり、それぞれのラプラス変換は、

 $$ \tilde{\bar{F}}(s)=\frac{1}{s+\lambda},\quad\tilde{\bar{G}}(s)=\frac{1}{s+\mu} $$ 

である．したがって，(6.4.3)式より A(t)のラプラス変換  $ \tilde{A}(s) $ は，

 $$ \tilde{A}\left(s\right)=\frac{s+\mu}{s\left(s+\lambda+\mu\right)}=\frac{\mu}{\lambda+\mu}\times\frac{1}{s}+\frac{\lambda}{\lambda+\mu}\times\frac{1}{s+\lambda+\mu} $$ 

となる．このラプラス変換は，容易に逆変換できて $ A(t) $は，

 $$ A\left(t\right)=\frac{\mu}{\lambda+\mu}+\frac{\lambda}{\lambda+\mu}e^{-\left(\lambda+\mu\right)t} $$ 

と求めることができる

##### 5）定常アベイラビリティ

 $ t \rightarrow \infty $ の定常状態におけるアベイラビリティは.

 $$ \begin{aligned}&A=\lim_{t\to\infty}A\left(t\right)=\lim_{s\to0}s\tilde{A}\left(s\right)=\frac{1/\lambda}{1/\lambda+1/\mu}\\ & ここで 1/\lambda=\int_{0}^{\infty}\overline{F}(t)dt=\tilde{\overline{F}}(0),1/\mu=\int_{0}^{\infty}\overline{G}(t)dt=\bar{\tilde{G}}(0)\\ \end{aligned} $$ 

となる。

##### (2) 修理系をともなうシステムの故障率

故障すれば修理し復元するシステムについて故障率を考える(ただし，修理時間については考慮しないこととする). 時間 $t$ までの故障回数 $N(t)$ を考えると, 図 6.4.4 に示すように, 区間 $(t, t+\Delta t)$ で故障が発生する確率は,

 $$ P[N(t+\Delta t)-N(t)\geq1] $$ 

となる．これを単位時間あたりの故障確率に置き換えΔt→0の極限を考えることにより．

 $$ \lambda\left(t\right)=\lim_{\Delta t\rightarrow0}\frac{1}{\Delta t}P\big\{N(t+\Delta t)-N(t)\geq1\big\} $$ 

と故障率を定義する．$\lambda(t)$が$t$に依存しない一定の値$\lambda$のとき，$\lambda$の逆数$1/\lambda$をMTBF(Mean Time Between Failures, 平均故障間隔)という．

##### (3) 3つの基本的な保全方策とそれらの最適化

防保全方策には，時間と状態のいずれの情報を活用するかによって以下の2つのタイプがある。

・時間計画保全(Time Based Maintenance)：暦あるいは年齢などの時間

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7132a284-b5fd-4773-ba8f-2700d73591b2/markdown_1/imgs/img_in_image_box_86_1233_878_1446.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F85badb2dc03dff5cdaab65c205476e97ad5488299a1d51097e97396b0449750b" alt="Image" width="66%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.4 修理・復元できるシステムの故障回数と故障確率</div> </div>


の情報を用いて事前取替を行うことにより故障を未然に防止する予防保全

・状態監視保全(Condition Based Maintenance)：定期的に行う点検の情報を用いて事前取替を行う必要があるか否かの意思決定を行う予防保全ここでは，時間計画保全で最も基本的なBarlow & Hunter $ ^{[9]} $のモデルについて紹介する．システムの代わりにユニットということにする．

## 1）方策１（年齢取り替え）

方策1は，「ユニットは故障時，または動作開始後T時間(すなわち年齢Tで)故障しない場合はその時点で取り替える」方式であり，単位時間当たりの取替費用を最小化する周期Tを決めることが要点になる.

取り替えの時間と費用について以下の仮定，

・取り替えに要する時間は無視できる

・取り替え費用

 $ C_f $：故障時の取り替え費用， $ C_p $：予防保全時の取り替え費用

を行って，単位時間当たりの期待費用が最小となるように T を決定することを考える。

単位時間当たりの期待費用 C(T)は，図6.4.5に示すように，故障と計画的な取り替えのいずれでも初期の状態に再生するので，サイクル(ユニットの取り替えから次の取り替えまでを一つのサイクルと考えることができる)を持つ

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7132a284-b5fd-4773-ba8f-2700d73591b2/markdown_2/imgs/img_in_image_box_51_1213_867_1449.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2Ff16dfc145a0eef6f0570a9f1c4c018c1427bdaa726ddb0372825a6db6c0f5d13" alt="Image" width="68%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.5 年齢取り替えの取り替えパターンの一例</div> </div>


確率過程になり，取り替えに必要な単位時間当たりの期待費用は

1サイクル当たりの取り替えに必要な期待費用／1サイクルの期待時間

と求めることができる．今の場合．故障までの時間の分布を  $ F(t) $ とすれば．

1 サイクル当たりの取り替えに必要な期待費用= $ C_{f}F(T)+C_{p}\bar{F}(T) $

 $$ 1 サイクルの期待時間 =\int_{0}^{T}t dF(t)+T\overline{F}(T)=\int_{0}^{T}\overline{F}(t)dt $$ 

となる。よって、

 $$ C(T)=\frac{C_{f}-(C_{f}-C_{p})\bar{F}(T)}{\int_{0}^{T}\bar{F}(t)dt} $$ 

となる。

一般的には,  $ C_f > C_p $ であることに注意して,  $ C(T) $ を最小にする  $ T^* $ は  $ C(T) $ を  $ T $ で微分して  $ 0 $ とおくことにより,

 $$ \lambda\left(T^{*}\right)\int_{0}^{T^{*}}\overline{F}(t)dt-F(T^{*})=C_{f}/\left(C_{f}-C_{p}\right) $$ 

を解くことにより求められる．ここで，λ(t)は故障率関数であり，上式を満たす T*はλ(t)が単調増加関数(すなわち，故障パターンでいえば IFR)で，かつ．

 $$ \lambda(\infty)>C_{f}/\left\{(C_{f}-C_{p})\int_{0}^{\infty}\bar{F}(t)dt\right\} $$ 

の条件が成立する時，一意に定まる．この時，

 $$ C(T^{*})=(C_{f}-C_{p})\lambda(T^{*}) $$ 

である。また、

 $$ \frac{C_{f}}{C_{f}-C_{p}}=\frac{1}{1-C_{p}/C_{f}} $$ 

であることに注意すれば，$T^{*}$は$C_{f}/C_{p}$の値のみに依存することになる.

##### 2) 方策2（ブロック取り替え）

「ユニットは年齢に関係なく，時刻 kT(k=1,2,…)で取り替える、また、故障時にも取り替える」場合を，ブロック取り替えという。個々に使用時間を把握するのに手間暇をかけることが難しく，暦時間で取り替え間隔を定めた方が合理的な場合には，ブロック取り替え方式が採用されることがある。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7132a284-b5fd-4773-ba8f-2700d73591b2/markdown_4/imgs/img_in_image_box_59_205_974_438.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A22Z%2F-1%2F%2Fd8d81984524c1061dabb41766b4f1757e71d479a743cbddad5a64038698b95c1" alt="Image" width="76%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.6 ブロック取り替えのパターンの一例</div> </div>


ブロック取り替えでは，図6.4.6に示すように，サイクルの周期は$T$で一定であり，取り替えに必要な費用は一サイクル当たりの故障回数によって変化する．したがって，取り替えに必要な1サイクル当たりの期待費用を求めるには，$T$時間内に故障により取り替える回数を$N(T)$として，平均取り替え回数$E[N(T)]=U(t)$を求めることが必要である．

##### 【說明】

平均取り替え回数  $ U(t) $ は再生関数と呼ばれ, 以下のように求めることができる.

 $ X_i $ を  $ i $ 回目に使用するユニットの故障までの時間を示す確率変数として,  $ S_n $ を,

 $$ S_{n}=X_{1}+\cdots+X_{n} $$ 

とすれば、

 $$ \begin{aligned}P[N(t)=n]=&P[N(t)\geq n]-P[N(t)\geq n+1]\\ =&P[S_{n}\leq t]-P[S_{n+1}\leq t]\\ =&F^{(n)}\left(t\right)-F^{(n+1)}\left(t\right)\end{aligned} $$ 

ここで， $ F^{(n)}(t) $は $ F(t) $の $ n $重のたたみこみで， $ F^{(n)}(t)=\int_{0}^{t}F^{(n-1)}(t-x)dF(x) $となる．したがって，

 $$ \begin{aligned}U(t)&=\sum_{n=0}^{\infty}nP\big[N(t)=n\big]\\&=\sum_{n=0}^{\infty}nP\big[F^{(n)}\left(t\right)-F^{(n+1)}\left(t\right)\big]=\sum_{n=0}^{\infty}F^{(n)}\left(t\right)\end{aligned} $$ 

となる．取り替えに必要な1サイクル当たりの期待費用は， $ U(T) $を用いると $ C_{f}U(T)+C_{p} $

と表せるので、取り替えに必要な単位時間当たりの期待費用は、

 $$ C(T)=\frac{C_{f}U(T)+C_{p}}{T} $$ 

である。

最適予防取り替え時間  $ T^{*} $ は  $ C(T) $ を  $ T $ で微分して  $ 0 $ とおくことにより。

 $$ T^{*}u(T^{*})-U(T^{*})=C_{p}/C_{f},(u(t)=dU(t)/dt) $$ 

と求められる. この時,

 $$ C(T^{*})=C_{f}u(T^{*}) $$ 

である。

##### 3）方策3(小修理をともなうブロック取り替え)

「ブロック取り替え(方策2)で，故障したユニットを新品と取り替えないで小修理を行って機能を回復させる方策」が，小修理をともなうブロック取り替えである．ここで，小修理とは「機能を回復する必要最小限の復元」のことである．したがって，小修理により故障率は変化しないものと考える．

##### 【仮定】

故障時に小修理を行う費用を  $ C_{m} $ とする以外は方策 2 と同じ.

方策3では，単位時間当たりの期待費用は，図6.4.7に示すように，サイクルの周期はTで一定であり，費用は一サイクル当たりの小修理の回数によって変化する.

1 サイクル当たりの期待費用を求めるためには，T 時間内の平均小修理回数を求めればよい．これは説明にあるように，累積ハザード関数  $ H(T) $ になり1

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9f9527d-c949-403e-af75-39cc5ae45cf1/markdown_1/imgs/img_in_image_box_73_196_903_430.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F9eeda7628515a17b55db48506654bdd87969a440f6b769c4d298143539caebcd" alt="Image" width="69%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図6.4.7 小修理をともなうブロック取り替えのパターンの一例</div> </div>


サイクル当たりの期待費用は,

 $$ C_{m}H(t)+C_{p} $$ 

となる. よって, 单位時間当たりの期待費用は,

 $$ C(T)=\frac{C_{m}H(T)+C_{p}}{T} $$ 

である。

【說明】

 $ P_n(t) $を時刻0で新品のユニットが動作を開始した時, 時刻tまでにn回の小修理を行う確率とする. これは,

 $$ P_{n}(t+\Delta t)=P_{n}(t)\left\{1-\lambda\left(t\right)\Delta t\right\}+P_{n-1}\left(t\right)\lambda\left(t\right)\Delta t,\ n=1,2,\cdots $$ 

を満たす．右辺の  $ P_n(t) $ を左辺に移行して．両辺を  $ t $ で割って． $ t \to 0 $ とすると．

 $$ \frac{d}{dt}P_{n}(t)=-\lambda(t)P_{n}(t)+\lambda(t)P_{n-1}(t),\ n=1,2,\cdots $$ 

となる． $ P_{0}(t)=\bar{F}(t) $ であるから，

 $$ P_{n}(t)=\frac{e^{-H(t)}\{H(t)\}^{n}}{n!} $$ 

となる．ここで． $ H(t)=\int_{0}^{t}\lambda(x)dx $ である．したがって．この平均は．

 $$ \sum_{n=1}^{\infty}nP_{n}(t)=e^{-H(t)}H(t)\sum_{n=0}^{\infty}\frac{\{H(t)\}^{n}}{n!}=H(t) $$ 

である。

最適予防取り替え時間  $ T^{*} $ は， $ C(T) $ を  $ T $ で微分して  $ 0 $ とおくことにより

 $$ \lambda(T^{*})T^{*}-\int_{0}^{T}\lambda(t)dt=C_{p}/C_{m} $$ 

の解として求めることができる。

λ(t)が連続で単調増加関数ならば T*は有限で一意に定まる. このとき,

 $$ C(T^{*})=C_{m}\lambda(T^{*})T^{*} $$ 

である。

寿命がワイブル分布に従う時は  $ \bar{F}(t)=\exp\{-(t/\eta)^{m}\} $ であるから,  $ m>1 $ であれば,

 $$ T^{*}=\eta\left\{\frac{C_{p}}{\left(m-1\right)C_{m}}\right\}^{1/m} $$ 

となる。

### 第７章 信頼性手法の組織的な活用

信頼性では，モノの物理的・化学的な変化にともなう品質の経年変化を問題にすること，一度故障が発生すると安全や環境の問題へ連鎖することもあり，その影響も大きい場合がある。新製品開発の源流段階から，信頼性保証について積極的に取り組んでいく必要があり，これを効率的かつ効果的に進める信頼性手法が重要となる。

信頼性手法は，未然防止や故障の連鎖を最小限に止めることなどへ活用できるように工夫されている．このような特長を引き出し価値化するには，新製品開発プロセスに手法活用のあるべき姿を織り込み標準化し，構想や設計の段階で機能・配置・構造設計や使用環境条件に対応する考え方を明確にし，チームで評価へ組織的に活用する．

### 7.1 信頼性手法の特徴

## (1) 源流管理による未然防止と再発防止

##### 1）品質情報の価値化

開発プロセスや市場の品質情報を価値化するには, 図7.1.1に示すように,

・原因を究明するシステムにフィードバックして発生問題について再発防止の処置により解決

・品質問題を作り込んだ，及び見逃した業務プロセスへフィードバックして活動と情報の流れを見直し，事前の予測・予防に活用し未然防止

て活動と情報の流れを見直し，事前の予測・予防に活用し未然防止の２つのアプローチがある．いずれの場合も解決の質とスピードには．フィードバックした品質情報に対する価値観，原因究明と対応策を検討する思考プロセスなど，組織文化が影響する．情報に対する価値基準は人により異なるので，同じ組織に属していても人による違いも大きい．手法を学び的確に活用できるように人を育て組織を革新すれば，情報を論理的に分析して効率的・効果

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9f9527d-c949-403e-af75-39cc5ae45cf1/markdown_4/imgs/img_in_image_box_123_971_912_1447.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A22Z%2F-1%2F%2F10ea52ad66f910839b75891dcd3dc4733ce4cc6014f3f3717a2279731d865cd3" alt="Image" width="66%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図7.1.1 品質情報価値化のパターン</div> </div>


的に価値化できる．人によるばらつきが小さくなるとともに，相互に相談できる，さらに，コミュニケーションできる共通のツールを通して連携も良くなるなど，手法活用の効果は大きい．

問題は，突然表面化するわけでなく必ず兆候がある．市場流通後，最初のクレームや不具合の報告に大きな事故へ連鎖・拡大する予兆の情報が含まれるものである．兆候への気づきが遅くなれば，解決の時間とコストがかかる．スピーディな解決には，報告内容の精査や拡大防止の是正措置などについて指示・意思決定できる経営トップに，重要品質情報が迅速に報告する体制を整えることが第一に重要である．次に，品質問題の発生メカニズムと要因を解明できる体制を整えることである．信頼性手法は，これら2つの側面で有効に機能する．

発生の未然防止では，市場流通前に問題を発見し課題化して解決する．潜在化している問題を顕在化して，未然に防止する必要性があるか優先順位を明らかにする．また，今までにない問題であれば，モデルや実験的な検討を進めて，問題の構造と解決の方向について明らかにする．

##### 2）源流管理による未然防止

製品の信頼性にかかわるトラブルの発生は，機能にとどまらず，安全や環境などへ連鎖することも少なくない．過去の経験と技術的知見を活用して図面や技術仕様書などに潜在化している問題と連鎖事象を読み，防止対策を考え，設計変更を進める．

防止では，課題の明確な定義と優先順位が要諦になる．状況が複雑な場合には，予測した問題リストから優先順位の低いリストを除外する消去法のアプローチをとる．課題化しなかった問題についても机上にあげ，議論することを通して関係者に見えるようになり，幅広く深い分析を促す．問題解決が後手後手になることを防ぐ，経年変化の問題は潜在化しやすく，FMEAに加えてデザインレビューによる専門能力の活用，固有技術とマネジメントの融和を支援できるように信頼性手法を効果的に活用する．さらに，社内評価能力充実と多

種・多様な専門能力を組織的に活用するなど，未然防止のマネジメントとリーダシップのあり方が問われる。

##### 3）再発防止における的確なリコールの実施

リコールは文字通りに解釈すれば，再び呼びかけることである．最初の呼びかけは，製品の価値をできる限り多くの人に伝え，販売・購入へと行動を促す目的で行う．再び呼びかける目的は，販売した製品に安全など拡大損害へ連鎖する欠陥が明らかになった場合に，欠陥による被害の拡大を未然に防止する情報を迅速かつ的確に伝えることである．伝える対象は当該製品を所有あるいは利用している消費者になる．

リコールには，法律的な裏付けがある場合と，当該企業が自主的に行う2つのタイプがある．自動車など法的なリコール制度がある製品の場合，安全にかかわる構造的な問題が明らかになれば規制当局にすみやかに届け出て，原因と対策を報告してリコールの進め方について協議する．

製造事業者による自主的なリコールは，自らの意思で安全な使用ができる呼びかけを進める．新聞などの媒体を通して社告という形でリコールの情報を伝えるのが一般的である．注意情報の伝達や修理による対応の効果が不十分で問題が根本的に解決しない場合には，法的裏付けに基づく（強制的な）リコール対応を求められる場合がある．

消費者からは不具合発生からリコール届け出までの期間短縮を求める声も増えている．期間短縮には，原因究明を迅速に行うために故障解析が重要となる．故障解析では，FTAによる故障メカニズムの仮設の提示と故障現品の機器分析の充実が要点である．自動車でいえば，エンジンの燃焼解析装置や部品素材の耐久性を調べる装置など，故障解析専用に利用できる環境にすれば分析期間が短縮できる．届け出期間短縮で品質に関する企業イメージを高めるはか，回収や修理などリコールにかかわる経費の削減にもつながる．

## (2) 多様な固有技術の融合

トラブルの発生状況を言葉(例えば，故障モード及び物理的状態量)で表し，さらに故障発生メカニズムについて定性的・(パラメータを考慮に入れ)定量的に究明する．現象として観察される事象をエネルギーの流れに着目して物理量で表現し，物質が生成する化学反応の条件を明らかにする．さらに構造・形状レベルへと逐次展開して，アクションが可能なレベルへと分析を進める．構造・形状の最適化設計を進めるともに，技術の蓄積・伝達を重視して設計思想・設計根拠の背景を伝えるようにすれば，仕事の進め方も丁寧になる．

すなわち，図7.1.2の例に示すように，

・トラブル発生状況を物理量や化学反応で表現

・これをエネルギーや物質の流れと関連させ

・エネルギーの流れや物質が想定と異なる状況を部品の形状やコンフィグレーションレベルで記述

と，的確な言葉で表現して論理的・逐次的に展開し，情報を共有・共用できるようにする. このような思考プロセスを重視する組織の価値観と文化が，解析

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//070e1329-25a5-4a63-8265-865902790acb/markdown_2/imgs/img_in_image_box_52_956_839_1474.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A19Z%2F-1%2F%2F060aac97bcf4bb1683bc1472913605f907b48ce3305de0153577eab75cf898ed" alt="Image" width="66%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 7.1.2 不具合事象の体系的な展開</div> </div>


力や必要な人材，設備など，経営資源のあり方を左右する。

##### （3）耐環境性の重視

同じ図面と工程で生産された製品でも，使い方や環境条件の相違により故障発生までの時間は異なる．コンデンサー等の電子部品では10℃半減則が有名である．これは温度が10℃上昇すると寿命が1/2になるというものである．温度等の環境条件により故障までの時間が異なるので，耐久性等の定量的な解析を進める時には等価な環境条件へデータを変換する必要がある．

想定した故障モード以外の故障現象が観測される場合もある．事前に想定できなかった原因を調べてみると，使い方がレアケースあるいは実績のない使い方・環境である場合が少なくない．このような見落としを早期に発見するためには，環境条件について意識的に調査する体制を整えることが必須となる．

##### (4) 「数と時間の壁」の克服

信頼性を定量的に評価するためには信頼性データが必要となる．信頼性データ収集には，データが時間または時間に相当する単位（例えば，走行距離とか使用回数）を持つことから長い時間を要し，図7.1.3に示すように中途打ち切りや加速寿命試験などを工夫して「数と時間の壁」を克服することが必要となる場合がある．

データの解析には，打ち切り時点で故障していない情報も必要である．故障したサンプルのみでなく観測を打ち切ったサンプルについて，打ち切りデータであることが報告されるように，データシートのフォーマットを前もって準備する．

「数の壁」の打破では，信頼性試験に用いるサンプルの選定へ配慮する．試験に用いるサンプルをランダムに選ぶのではなく，設計的に許容される最悪品を準備することが望ましい．設計公差の限界となるサンプルで試験・評価し目標寿命を満たすことを確認できれば，規格内の場合には論理的に目標寿命が保証されることになる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//070e1329-25a5-4a63-8265-865902790acb/markdown_4/imgs/img_in_image_box_49_204_887_622.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A20Z%2F-1%2F%2F57f0fb816f2260dfb43338d77f63ae8a23a733e9cf4c94e03c3600c2ad9ff31f" alt="Image" width="70%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 7.1.3 時間の壁への２つの対応</div> </div>


試験の目的は，「モノの評価ではなく，モノによる図面の評価」である．公差すれすれのサンプルを作ることができる高度な試作能力が要求される．設計と試作評価で公差設定の情報を共有・共用するコミュニケーションが大切になる．

試験・評価に用いるサンプルの重要性を，「ベアリングの内輪抜けによる損傷」で考えてみよう．バルブの低温作動時に，軸受けのベアリング周り寸法，

・ベアリング内外径

·ケース内径

·ボール外径

のパラメータがそれぞれ設計公差の限界に近かったために，(最悪の組み合わせで)実機製造時に発生したことがある。開発段階で明らかにするには，どのように試作・評価のあり方を変えればよいだろうか。設計の限界に対する余裕を評価する考え方で試験・評価を進めれば，実機製造の段階より早く発見できるようになる。一つは，開発時の評価に用いたサンプルの素性に関する記録を残す，次に，ペアリング周り寸法が最悪の組み合わせとなるサンプルを意図的に作る試作能力である.

### 7.2 信頼性評価と情報の共有・共用

##### (1) 信頼性の評価

信頼性の特徴は，出図から結果が出るまでに時間がかかることである．「数と時間の壁」を打破する評価のあり方で，開発の品質とスピードに大きな差が出る．事後の評価の evaluation から事前の評価の appraisal，すなわち設計を評価する考え方から評価から設計の活動と情報の流れへと変えなければならない．具体的には，顧客要件を実現する技術の負の側面とこれをコントロールする技術の評価，さらに動作機能原理図などで定量化してモデル化とシミュレーションによる評価を行う．これらを情報技術により実現して仕事の進め方を革新し，設計あるいは計画の品質を向上する．

##### (2) 信頼性手法の類型化

信頼性手法はそれぞれ開発された背景があり，活用する目的が異なり，適用できる状況も変化する．これらの特徴を理解し活用して，設計，評価，生産等の関連部門で信頼性情報を共有・共用する．信頼性手法をいくつかのカテゴリーに分けて，適用できる環境や開発プロセスのステップを考慮して活用タイミングを理解することが望ましい．

信赖性手法を，

・手法を使う時に活用できる故障データの数

・手法が主に使われる新製品開発の段階

・手法を活用する目的

の項目を考えて，3つのカテゴリーに類型化する．その結果，表7.2.1に示すように，A，B，Cの3つのタイプに分類できる．

3つのタイプの手法の特徴を言葉で簡潔に説明すると、以下のようになる。

・Aタイプの手法：開発プロセスの企画や開発・設計の段階で，後工程での品質問題が発生しないように事前に問題を発見し，改善対策を見い

<div style="text-align: center;"><div style="text-align: center;">表 7.2.1 信頼性手法の分類</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>手法のタイプ</td><td style='text-align: center; word-wrap: break-word;'>データ数</td><td style='text-align: center; word-wrap: break-word;'>段階</td><td style='text-align: center; word-wrap: break-word;'>目的</td><td style='text-align: center; word-wrap: break-word;'>手法名の例示</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>Aタイプ</td><td style='text-align: center; word-wrap: break-word;'>n=0～1</td><td style='text-align: center; word-wrap: break-word;'>開発設計</td><td style='text-align: center; word-wrap: break-word;'>予測予防</td><td style='text-align: center; word-wrap: break-word;'>FMEA, FTA, DR</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>Bタイプ</td><td style='text-align: center; word-wrap: break-word;'>n=1～5</td><td style='text-align: center; word-wrap: break-word;'>試作</td><td style='text-align: center; word-wrap: break-word;'>評価確認原因探求再発防止</td><td style='text-align: center; word-wrap: break-word;'>信頼性試験故障解析良品解析</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>Cタイプ</td><td style='text-align: center; word-wrap: break-word;'>n=5～100</td><td style='text-align: center; word-wrap: break-word;'>使用</td><td style='text-align: center; word-wrap: break-word;'>市場品質の把握</td><td style='text-align: center; word-wrap: break-word;'>市場品質情報収集システムワイプル解析などの統計的手法</td></tr></table>

出すために用いられる手法

・Bタイプの手法：品質問題が発生したか，または発生の兆しが潜在化していることをきっかけにして，発生メカニズムを解明するために用いられる手法

・Cタイプの手法：ユーザが主体となって評価する段階である製品使用の段階での品質情報を体系的に収集して解析し，前工程にフィードバックして開発プロセスの改善に活用するために用いられる手法

## (3) 3つのタイプの手法の融和による情報の価値化

市場で発生する品質問題を開発段階で明らかにして確実に解決していくには，個々の信頼性手法を活用するとともに，各手法を活用して得られた情報を積極的に融和・統合することでより効果は大きい．各手法の特徴と果たすべき役割をよく理解し，図7.2.1に示すようにより豊かなコミュニケーション体制の構築と確立を行い，組織的に活用する．

3つのタイプの手法の基本的な相違点は，評価の立場にある．Cタイプの手法の目的は，実際の使用時及び消費者・ユーザの使用体験に基づく社外評価結果を収集・解析し，事前あるいは社内評価の結果と対比して事前評価の良かった項目と改善すべき項目を明らかにすることである．このような手法を的確に活用して社内評価能力をスパイラルアップするには，「第三者の声を聴く」こ

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//f2194b81-1ee8-4887-b83b-592fd17a9849/markdown_2/imgs/img_in_image_box_316_206_720_652.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A13Z%2F-1%2F%2F5a336ab1c78fa2e62679c815651f14b92493b7d7414bd59c8bdadcfde69dd3ef" alt="Image" width="33%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図7.2.1 3つのタイプの手法における情報共有のパターン</div> </div>


とが重要である．図7.2.2に示すように，市場品質の情報源を整備・構築し．解析結果を関連部門へ迅速にフィードバックするとともに，社内評価体制の見直しなどを進めるにはCタイプの手法を活用する．

### 7.3 組織能力と情報の価値化

##### (1) 情報の価値化

「情報をどう扱うかは，情報それ自体の価値と同じくらい大切である」，とフィンケルシュタイン $ ^{[10]} $は述べている．そして，コルゲートの場合には，失敗の調査から得られた教訓を，

・同様のプロジェクトで共有するか

・新しいプロジェクトを立ち上げる時に参考にするか

の２通りに扱うとしている．プロジェクト・チームでの共有では，「過去の失敗の一覧を見て，最も再発しそうなものを選び，「継続的改善策」を策定して再発防止に努め，起きた場合のダメージの軽減を図る」とし，全社的には「あるチームが継続的改善レビューのすべてのデータに目を通し，共通するデータ

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//f2194b81-1ee8-4887-b83b-592fd17a9849/markdown_3/imgs/img_in_image_box_15_204_839_1044.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A14Z%2F-1%2F%2F4770d2b652479cdf1602db7634c7caa06715e6fb86816db959da20e7890e4bf7" alt="Image" width="69%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 7.2.2 市場品質情報のフィードバックの仕組み</div> </div>


(出典) 下山田 薰(1984):「小松製作所における市場品質情報収集システムについて」,『品質』. Vol.14, No.3, p.84. 日本品質管理学会を一部修正して作成.

に目を通し，共通するテーマを抜き出し，繰り返し起きている問題に対して修復策を練る」としている.

情報をどのようにすれば適切な方法で伝えられるかは，すべての企業が直面する課題である．しかし中でも，失敗から学んだ情報のコミュニケーションは最も大切である．自分の失敗を認めることと，それを他者のために教訓として残すことは全く別物である．失敗を認め，それについて話すことで，ミスは会

社の財産になる．人々は物語を通じて出来事や状況を記憶する．優良企業では，こうした物語を新人研修，中堅社員研修，社内報やスピーチなどのコミュニケーション手段を使って広めている．

テドロー $ ^{[6]} $も,「多くの失敗は,都合が悪い事実を信じたくないが故に個人や組織が否認したために起こった」と述べている.

##### (2) 情報ナビゲーションによる知識の伝達

市場での品質問題を開発段階で予測して解決することは重要である．一方，事前に市場で発生する品質問題の見落としをゼロにしてすべてを明示することは，情報の完備性や科学技術の水準等を考慮すれば，実際的には難しいというのも事実である．したがって，使用環境やモノの経年変化等を精度よく解析し解決する能力向上には，解析結果のフォローアップが重要である．市場品質情報を収集して，関連部門が活用したくなるように，活用せざるを得ないように品質情報を整理・整頓して伝える．

市場品質情報を開発段階の設計評価等へ有効に活用している例を表1.2.2(p.32)に示している．これは，

・クレーム情報を，構成部品・不具合事項(故障モード)・使用環境条件の3つの視点からマトリクス解析して，

・次期新製品の開発段階で「市場クレームの再発防止」へ組織的な活用を促すデータベース化し，

・市場品質情報を組織的に活用し，戦略的に品質作り込みへの取り組みを進めている

事例である．クレーム情報を，発生した順に蓄積するだけでなく，図面の情報と対応した形で，構成部品の情報からも容易にアクセスできるように情報ナビゲーションの環境を整える．第11章で述べるFMEAの手法で故障モードを発想する時に価値の高い情報源として活用できる．

このような市場品質情報を経常的に収集し，蓄積して活用するには時間を奨する．しかしながら，品質の改善とブランド価値の向上により他社との競争優

位を確保することにもつながるので，取り組む価値はある．すなわち．製品やサービスの信頼性や安全性の向上にも大きな成果を期待でき．クレームやリコールへの確に対応できれば，品質問題を事後的に解決する品質コストは減少し，顧客満足を高めることができる．

クレーム情報を解析し，新製品開発過程で必要に応じて容易に活用できる環境を整えれば，確実な再発防止を組織として実現し，「市場クレームの再発防止」に有効な情報源を整備できる。さらに，過去のクレーム情報を組織として再発防止に活用することは，開発に携わる各個人にとっては「市場クレームの未然防止」に結実することになる。情報をオープンにして未然防止に活用できるように業務プロセスを見直し組織文化を構築することにより，良いコミュニケーションとディスカッションの実践が進む。

このように「市場クレームの再発防止」の活動を組織として確実に継続し、マネジメント体制の確立にも反映すれば、製品信頼性は確実に向上する。この成果として、製品のみでなく顧客からの組織に対する信頼性向上と良い関係の形成に結び付く。したがって、顧客ロイヤルティが高まるといえる。

# 第8章 品質リスクマネジメント

リスクマネジメントとは，企業等の組織，あるいは組織の活動に潜在するリスクの種類を明らかにして，起こりやすさ(likelihood)と損害の大きさ(consequence)で二面的に評価(リスクアセスメント)し，許容レベルへリスクを低減する対処法を検討し実施することである．リスクの考え方で二面的に評価を進めて，発生防止に加え，発生した場合の影響を低減する方策についても検討する．したがって，極めて損害が大きいリスクについては起こりやすさにとらわれずに事前の検討対象とできる．

リスクの種類には，地域により異なる治安等のカントリーリスク，金利，為替などの変動に伴う市場リスク，不良債権問題に代表される信用リスク，コンピュータ2000年問題などのEDP(電子データ処理)リスク，さらにオペレーションリスク，システムリスク，コンプライアンス(法令遵守)リスク，レピュテーション(評価)リスクなど多様である.

本章では，新製品開発プロセスをリスクマネジメントの対象とする．新製品開発の進捗遅れ中心の管理から脱皮して，プロセスにおけるリスクを想定して仕事を進めるマネジメントについて考える．

### 8.1 リスクの概念と新製品開発

## (1) リスクの概念とリスクコミュニケーション

##### ① リスクの考え方

##### １）リスクの概念

リスクは，「損害の起こりやすさ」と「損害の大きさ」を組み合わせた概念である．発生した場合の損害が大きければ，発生しないようにするとともに損害を大きくしない対策についても事前に講じることを重視している．例えば，事業規模や市場を特定して小さく新しい事業を始めるなど，小さな組織で取り組むことが実際に行われている．小さく始めて，うまくいかない場合には損害の少ない段階でやめる．事業化や製品化の失敗による影響と機会損失のリスクのバランスを取りながら，「損害については最小限に抑える」というマーケティングに通じる考え方である．

また，新製品開発時には信頼性試験を行って製品の経年変化により発生する市場での品質問題を先取りし，検証している．この目的には，品質問題について起こりやすさを評価するとともに，どこまで連鎖するのか検証することも含まれる．多種多様な損害を限られた経営資源で統合的にマネジメントするには，「損害の起こりやすさ」と「損害の大きさ」の2元的な見方で評価し，優先順位を付けて対応することが合理的であるとの立場である．

##### ② リスクアセスメントによるリスクマッピング

リスクアセスメントでは,「リスクの種類」を想定し,ついで「リスク(起こりやすさ×損害の大きさ)」を評価する.さらに,図8.1.1に示すように,リスクマッピングを行い,リスクの全貌を明らかにして「許容不可」と「許容可能」に二分する.利便性が高い場合には,リスクとの総合的な視点から許容できる範囲を条件付き許容として考慮することも多い.条件付き許容は,さらなるリスク低減へ努めることを前提として,社会的に存在が許容されている意味

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//3624c833-eff3-4d5c-93ca-2851e6c6b0e5/markdown_3/imgs/img_in_chart_box_88_195_815_831.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F982890c8b4ab7c802c399c986a97b9685843ffd0d97ca52fa98cd474a6c1d77c" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.1.1 リスクマッピングによる許容可否の評価の一例</div> </div>


になる。

製品設計では，機能を果たす作動原理，レイアウトや構造のコンフィグレーションの情報により，使用や作動状態におけるエネルギーの流れなどに着目して，経年変化とその起こりやすさを予測し，変化による連鎖事象を見極め，影響の大きさを想定する．影響が他の財産の損失などの拡大損害，さらに製品から企業ブランドへ拡大するクライシスの場合には，可能な限りの手を尽くして発生しないように取り組む．影響については，冗長化やフェールセーフなどの多重防護により連鎖を遮断して緩和できる方策を設計や計画に取り入れる．事前にリスク低減へ取り組んでも，安全にかかわるなど大きな問題が発生した場合には，再発防止に向けリコールするなど早期に必要な対策を実施する．

製品設計におけるリスクアセスメントと、その結果をマッピングし未然防止を進める方法論については、第11章のFMEAで詳しく説明する。

##### ③ 許容されるリスク(受恧限度内リスク)の考え方

OHSAS 18001(労働安全衛生マネジメントシステム)では，図8.1.2に示すように，致命的な影響があるリスクの種類について許容される程度の起こりやすさを $ 10^{-6}(1/\text{年}\cdot\text{人}) $以下としている．起こりやすさ(年間1人当たりの発生確率)が $ 10^{-3}\sim10^{-6}(1/\text{年}\cdot\text{人}) $であれば，便益性とのかねあいで許容の可否を判断する． $ 10^{-3}(1/\text{年}\cdot\text{人}) $以上の場合には許容不可としている．

製品の許容される品質リスクについては，一般的な基準は策定されていない．致命的な損害がある場合の許容される基準としては $ 10^{-6}(1/\text{年}\cdot\text{人}) $以下が考えられる．現実的には，組織としての考え方にベンチマーキング等により収集した情報を考慮して，許容される基準について主体的に定める．

##### ④ リスクの低減

リスクアセスメントで許容できないリスクについては，許容できるレベルへ低減するため，第一に「損害の起こりやすさ」を低減する対策，次に「損害の大きさ」を低減する対策を実施する．リスクアセスメントからリスクマネジメントの流れである．

損害の大きさを低減する対応では，生産物損害賠償責任保険など損害賠償の履行を確保する手段として，保険も活用できる．事前に想定される損害賠償を

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//3624c833-eff3-4d5c-93ca-2851e6c6b0e5/markdown_4/imgs/img_in_chart_box_248_1077_719_1443.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F5fada83be99418ab421ed0cd85a353c1e3afb6e0295c06eef7e968344dd35424" alt="Image" width="39%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.1.2 致命的な損害に結び付く場合の受忍限度内リスクの考え方</div> </div>


即時に支払うことができなければ，損害賠償の履行リスクが大きい．保険の機能を活用して保険会社に損害賠償を履行してもらい，代わりに保険料を定期的に支払う．保険会社は，確率論における大数の法則を活用したビジネスモデルにより，被保険者に負担可能な保険料を固定費化して負担してもらうことで，発生した場合の「損害の大きさ」を移転するリスクマネジメントの手段を提供している．したがって，大数の法則が成立するように同じリスクを共有する多くの主体の存在が前提になる．交通事故による損害賠償のリスク，家財の火災によるリスクなどでは，保険によるリスク低減の方法が幅広く知られて，普及している．

##### ⑤ リスクに着目するメリット

リスクを評価するフレームワークを共有して新製品開発のマネジメントを進めれば，品質リスクへの関心も高くなる．将来に対する関心の範囲が広くなり，組織がコントロールすべき対象を組織の外に定めることで部門間連携がよくなり，副次効果としては「気付き」による発見能力の向上，さらなる品質の向上や業務の改善が期待される．また，「ここまで考えてくれていたのか」という顧客の感動を忘れてはならない．

##### 2）リスクコミュニケーション

リスクが発生しないようにすることができれば望ましい．しかし．「人は必ず間違う」．「モノは必ず壊れる」．「安全に絶対はない」などといわれるように．表と裏の二面性があって一方を残し他方だけをゼロにすることは原理的に不可能で，あらゆるリスクをゼロにすることはできない．鉄道はレールという軌道を走るので，車のように軌道から外れる可能性は非常に小さいが，脱線というリスクはゼロではない．また望ましい状態は，「健康とは病気がない状態である」というように，否定形で定義されている場合が多い．新たな病気の診断基準が明確になるなど，医学が進歩するとともに病気の種類は増え，また治療可能な病気も増加する．したがって，現状を認識して維持・改善するにはり

スクを共有するコミュニケーションが欠かせないということになる。

リスク低減対策が新たなリスクを生み出していないか評価することも考えなくてはならない．分野は異なるが，外来性動物による在来生物の生態系破壊の問題が大きな問題になりつつある．害虫等を駆除するため導入した生物が，在来生物生存へ予期していない大きな問題を起こしている例を多くの国で見ることができる．生態系の連鎖へ及ぼす影響を多面的そして俯瞰的に検討する重要性を示唆している．

FMEA やコンフィグレーション・マネジメントの目的は，リスクコミュニケーションにより VA/VE などによる改善策が新たな問題を引き起こさないようにするところにある．デメリットについての確認が不十分だと，改善が逆効果になることもある．失敗の発生原因として，文部科学省「失敗活用研究会」の報告書 $ ^{[12]} $は，

・関連情報の欠落による理解不足，対応力の低下

・コミュニケーションギャップ(情報の途絶や不足)による理解不足や不十分な対策

• 俯瞰管理能力の欠如

・責任体制，情報伝達経路の不明確化

・普段あまり使わない機能の管理(整備)不良

・危機管理意識の欠如

・うっかりミスの発生を前提にした措置の欠如

を指摘している．失敗を少なくするには，部分的な見方・考え方では見落としが生じることから俯瞰的視野で多面的に思考するマネジメント，リスクを想定したシナリオ作成による事前の準備，小さな変化の予兆が組織トップに伝わるコミュニケーション能力，非定常作業におけるヒューマンエラーへの対応などが，組織として重点的に取り組むことを要請されるということである．

##### (2) 新製品開発におけるリスク

##### 1）新製品開発の4つのカテゴリー

新製品開発は，顧客・市場のニーズを発掘して，技術により顧客へ解決策（ソリューション）を提案する活動である．新製品開発を顧客・市場と技術の二元的な見方により類型化すると，図8.1.3のように，

·改良

·置き換え・品種拡大

· 用途開発

·多角化

と, 4 つのカテゴリーに整理できる. カテゴリーに応じて,

・「改良」では, 新規要素・変更変化点に起因する品質リスク

・「置き換え・品種拡大」では, 価格競争リスク

・「用途開発」では，顧客ニーズ発見リスク

・「多角化」では，市場の拡大が止まった時の専門企業との競争リスク

のリスクが想定される。

4つのカテゴリーのリスクを, 市場と技術そして市場と技術の複合的な視点から類型化すれば, スティール $ ^{[4]} $が述べているように,

・マーケットリスク

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a9fb7380-4543-4892-831e-427474e61595/markdown_2/imgs/img_in_image_box_162_1093_817_1448.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F5226cd3525cc3617b7ba5317cde9c1b7ee2c1fc9ba21a0f521c51bbb6f96c655" alt="Image" width="55%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.1.3 事業・機能戦略の策定と実践</div> </div>


・技術リスク

・コンセプトリスク

となる。それぞれのリスクの内容は以下のようになる。

##### ① マーケットリスク

今まで経験していない市場に進出する場合には，流通ルートを含めて文化価値観が異なる．この変化は現状のマーケットより距離が遠いほど大きくなるが，メリットもある．今までにない方法で既存のマーケットに変化を起こすことができる．

##### ② コンセプトリスク

製品のコンセプトは製品の持っている特長であり，市場・顧客とコミュニケーションで大切な役割を果たす．今までの製品と大きく異なるコンセプトであると受け入れられないリスクもあるが，逆に受け入れられれば大きな成功をもたらし，イノベーションを起こす．この例として，K社が1982年に基礎化粧品に参入した時のコンセプト『塗って装う』から，肌への科学的アプローチにより『素肌を整えることにより美しくする(スキンケア)』がある．従来の化粧品と異なるコンセプトの発想の基盤となっているのは，石鹸や洗剤の開発で養われた酵母技術や界面活性技術である．

コンセプトは，「販売員が１分以内で説明できる」ように，簡略すぎないように簡易に表現する．製品やサービスの有している「機能性」に着目するのが鍵である．瀬戸 $ ^{[5]} $は，『「女性の営業担当者が（鈴木自動車の）ワゴンRは運転しやすいと言っている』と話すと，鈴木さんは頷（うなず）かれた．『ワゴンRはなぜ人気なのですか』．『それは機能性だよ．買い物をした女性が袋を持ちながら屈（かが）まずに乗れるんだよ』．帰りの新幹線で『機能性．機能性』と反芻（はんすう）した．ドライの特長は『辛口』と『キレ』だ．これに加える機能性とは何か．週末に妻とスーパーに行き気が付いた．妻は冷蔵ケースの奥に手を入れて品物を取り出す．『何故？』．『新しいからよ』．図（ひらめ）いた．食料

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a9fb7380-4543-4892-831e-427474e61595/markdown_4/imgs/img_in_image_box_68_194_847_544.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A22Z%2F-1%2F%2F936360056e8e591366d84471aa6838daf05756c787d1eaca7f10674c5b9dd59a" alt="Image" width="65%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.1.4 新製品開発企画におけるリスク空間</div> </div>


(出典) スティール(1991) : 「技術マネジメント—総合的技術経営戦略の展開」(後藤正之, 山之内昭夫訳), p.159, 日本能率協会マネジメントセンタを修正して作成.

品の機能性とは鮮度だったのだ」，と述べている。

##### ③ 技術リスク

新たな技術を導入すれば，今までにないリスクが発生することは多い．自動車も内燃機関から電気自動車へ動力を生み出す原理が異なれば，技術的な問題も変わる．コストの問題もあるが，技術の筋の良さとして耐久性や安全性が新たな問題として浮かび上がり，採用できるかどうかを左右することが多い．新しい技術を採用すると，実際に加工や組み付けをしてみないと見えない，また使ってみないとわからない技術的な問題が出てくる．これらをどのように解決していくのか，技術を事業化するうえで大切なところであり，リスクマネジメントの重要なところである．

これらのリスクは，図8.1.4に示すように，現在の位置からの距離が遠くなるにつれてリスクも大きくなる.

##### 2）新製品開発の品質リスクに着目した課題と改善

新製品開発の開発ステップにおける課題と改善の方向の一例を．表8.1.1に示す．これらの特徴は．

<div style="text-align: center;"><div style="text-align: center;">表 8.1.1 新製品開発における課題と改善の方向</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>課題と改善改善の方向ステップ</td><td style='text-align: center; word-wrap: break-word;'>課題</td><td style='text-align: center; word-wrap: break-word;'>改善の方向</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>技術企画商品企画領域</td><td style='text-align: center; word-wrap: break-word;'>·市場情報の分散(DB管理)·情報共有化の手法と管理·基礎技術研究強化·企画検証強化·商品企画·開発の管理が弱い·設計主導開発vs営業ニーズのバランス化·事業計画と商品開発計画の完全整合</td><td style='text-align: center; word-wrap: break-word;'>営業部門の参画,情報を企画室集約PDM(Product Data Management)システム導入横断的「〇〇研究グループ」設立生産·生産管理·営業部門を含めた企画開発室強化横断的開発プロジェクトの結成と,技術開発課による一元管理商品企画室による開発テーマの事前検証商品企画室によるレビュー</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>開発領域（研究試作段階）</td><td style='text-align: center; word-wrap: break-word;'>·品質評価:官能·感性(プロ依存)·品質特性の曖昧さ—作り方と品質の相関—数値化の難しさ—品質を構成する各仕様と,それが及ぼす影響度の関係·各種技術やノウハウの蓄積—個人ペースにとどまっていて共有化ができていない·開発業務が標準化されていない</td><td style='text-align: center; word-wrap: break-word;'>「開発段階の手順」確立</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>開発関連領域（評価試作段階）</td><td style='text-align: center; word-wrap: break-word;'>·設計図·加工図への落とし込み不十分—製品公差の妥当性—加工や手順を考慮した設計·加工技術が類似,既存方法踏襲:既存の品質問題を繰り返す·スルーでの品質基準,工程設計が不足·「ステップ管理規定」の現実との乖離·品質基準や検査基準の数値化が少ない·作り方の事前検討が不十分—製品設計前の情報フィードバック—基準面,クランプ,位置決め—組立のしやすさ·設計検証,デザインレビューの問題予防·生産管理,工務部門との連携不足</td><td style='text-align: center; word-wrap: break-word;'>横断的製品設計グループの確立と,クロスチェックの実施「技術開発課」の設立による新加工技術研究開発プロジェクトにおけるデザインレビュー:工程設計における技術問題フォロー3D-CAD導入による設計と検証の強化コンカレント·エンジニアリングでの早い時期でのネック技術潰しDfX(Design for X)によるさまざまな知識の統合「開発プロジェクトチーム」でのコラボレーション,コミュニケーションの推進</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>開発関連領域（生産段階）</td><td style='text-align: center; word-wrap: break-word;'>·工程能力不足（現場への押し付け）·初期流動ロス·機会損失·クレーム誘発·問題後追い:設計者トラブル·シューティングへの駆り出し</td><td style='text-align: center; word-wrap: break-word;'>生産立ち上げに至るプロセスにおける諸問題の早期解決によって,初期流動損失の極小化を図る</td></tr></table>

• 市場情報が分散していて顧客ニーズの一元化や使われ方の情報が十分に製品企画に反映できないことから，共有・共用する場の構築及び管理と手法の活用

・新たなコンセプトの創出と顧客の課題を解決できる技術開発力

・モデル化と解析に必要となる品質特性の明確な定義と評価方法の開発

・設計と生産技術・生産との良いコミュニケーションによる意思疎通と部門間の連携

・原材料の調達と使用・サービスの視点も重視するプロダクトライフサイクルスルーでの品質基準

・勘所を押さえた事前検証の進め方とマネジメント

・そのための開発プロジェクトチームの構成と運用，ならびに複数のプロジェクトを横断的にマネジメントするプログラムあるいはスキームの明確化

・属人的な知識・知見を組織として共有・学習する仕組みの構築と活性化などに，整理できる.

### 8.2 未然防止と品質リスクマネジメント

## (1) 業務プロセスの標準化と見える化

##### 1）業務プロセスの標準化

業務に潜在化しているリスクを発見し，対策を検討し実施するには，「見えないところを見えるようにする」工夫が必要になる．例えば，営業成績の良い販売店は，

・顧客を開拓するチャンネルとして口コミを有効に活用している

• 直接の顧客に加え，その顧客の顧客に対するソリューションについても情報提供する活動を進めているなど，関心を持っている範囲が広い

・店長(トップ)の顧客意識, 売り上げ拡大への取り組み意識が高い

などの特徴が抽出される. 営業マンの数や店の規模など外部から把握しやすい

「経営資源」のみで，パフォーマンスを説明することは難しい．経営資源を生まれ変わらせ，購入動機の進化さらに受注などへ付加価値化するプロセスへ目を向ける必要がある．

属人的な営業から得意先の探索・発見・分類・絞り込み・交渉・成約の一連の営業ステップを組織的に遂行することで，

・営業の知識の洗い直しが可能になる．営業のプロセスをいくつかのステップに分解し，それぞれのステップごとに重要な知識を識別し，営業知識をパブリック化し共有することが可能になるとともに，合わせて教育・訓練及びOJTを通して実践できるように人材を育成する環境整備が可能

・組織営業を進めることで顧客目線に立ってタイミングよく，有能な営業担当が顧客対応することが可能

・営業プロセスの透明化により現在のステップの位置が明確になり，リスクを考慮に入れた進捗管理導入によるステップ展開の促進

・コストについても把握が容易になり営業の利益管理の透明化

・コストについても把握が容易になり宮楽の利益管理の透明化などの利点が生まれる。図8.2.1に示すように，顧客の購入プロセスのステップと同期化して，「顧客のビジネスとエネルギー環境の理解・確認からソリューション購買ビジョン・提案・評価を経て受注契約に至る『営業プロセス』の構築」を進めて，個々人の有している属人的ノウハウを組織として共有化・最適化して活用する。さらに組織のビジョンやトップの情熱(パッション)などの「価値観」が，経営資源を価値化・有効活用する業務プロセスのデザインに重要な役割を担う。失敗が外から見え，組織が補完できるようにする業務プロセスのデザインは，組織文化や価値観に依存するところが大きい。

組織として経営資源を備えることは必要条件であるが，十分ではない。経営資源を活用し価値化するプロセスの標準化のあり方が影響する。途中で挫折した事例，計画と実態の乖離などの情報をフィードバックし，経営資源を的確に活用し価値化できるように改善/革新するプラットホームは業務プロセスである。また，業務プロセスを明らかにしリスクをマップ化すれば，リスクを想定

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//022d7909-2558-42fe-83f2-2b3da0a79ba8/markdown_3/imgs/img_in_image_box_48_196_852_640.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2Fb241430aa6918ca0376ac91d009e5e37192a559c2208ef94a0d6da4315f04a00" alt="Image" width="67%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.1 営業プロセスの明確化と進捗管理</div> </div>


しマネジメントする未然防止活動へ役立つ．PDPCと併用すれば，多様なシナリオを事前に想定し対応策を準備できるので，価値連鎖の変化へ迅速に対応できる．

##### 2）スルーでプロセスを見る

販売市場・調達先の変動が頻繁になると，生産や営業など機能ごとに業務を分け，組織を運営する分業の度合を減らす必要が生じる．前後の業務を一連の経過(プロセス)に再統合(セル連結)して，活動と情報の流れを業務プロセスとして明らかにする．

双方向で業務プロセスの部分と全体を眺めながら論理的思考を進めれば，どこにどのような問題があるか「ボトルネックの発見」が容易になる。活動結果の情報を整理して残すことを標準化すれば，問題が発生した時のトレーサビリティも確保でき，異常の場合の処置が迅速になる。単一の活動から，これらが連鎖して形成されている業務（価値形成）プロセスをスルーで見えるようにして，俯瞰的視野でボトルネックを発見・改善して情報の流れを良くすることが，企業組織の中心的出発点である。

「業務とは付加価値を形成するプロセス」である考え方に立ち，後工程や顧客・市場(あるいは後工程)に対してどのような付加価値を提供しているのか，プロセスの果たすべき機能を見直す．このような「価値形成プロセスの考え方」に基づき，図3.3.1に示したように，機能別に構成されている組織の(価値を低減する)逆機能としてリスクを考えることもできる．

##### 【参考 8.2.1】 スルーネック分析

情報やモノの流れに着目してスルーでプロセスを見ると, ボトルネック(プロセスの弱点)発見の可能性を高められる.

情報やモノの流れが悪くなるところがスループットに影響を及ぼす．事前の検討対象プロセスになっていないことから見落とし，当該工程がボトルネックとなっている場合が多い．例えば，「工場の生産はフル生産で需要への供給能力は十分であったが，M国からU国へ製品を運ぶための鉄道車両への据え付け工具が十分確保できないなどの要因が重なり，需要に対する供給対応が不十分で機会損失リスクが発生」というようなことが生じる．

需要へ的確に対応するには，生産だけでなく顧客・市場へ製品を運ぶ物流も重要である．わが国では，しかし，他の地域に比べると関心は低い場合が多い．単位時間当たりの生産性であるスループットは，図8.2.2に示すように，最も生産性の低いプロセスに支配される．流れがスムーズであるかどうか，サイクルタイムとタクトタイムの概念によりスルーでプロセス全体を俯瞰的に見渡せば，ボトルネック工程を事前に発見できる．

## 3）品質リスク発見の着眼点

#### ① 情報やモノの流れに着目

品質リスクは，図3.1.2に示したプロセスモデルの考え方に従えば，活動と情報などの流れについて，以下の3つの要素に分割して検討を進めることができる。

• 製品やサービスを生み出すために必要な情報、原材料、エネルギー、労

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//e82b3ea6-b385-4426-8034-213e6af33664/markdown_0/imgs/img_in_image_box_150_203_611_351.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F8125b1d11c4ae454e330823678a22349998045d4c3755c780a0c5d6b1da255b3" alt="Image" width="38%" /></div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//e82b3ea6-b385-4426-8034-213e6af33664/markdown_0/imgs/img_in_image_box_120_369_772_551.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F1132860047984808412642218cd3d5c52605ae9f7b2f1e50962fafe1b6827463" alt="Image" width="54%" /></div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//e82b3ea6-b385-4426-8034-213e6af33664/markdown_0/imgs/img_in_chart_box_125_577_770_786.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2Fdafac51f236337dc2c7c7c527ee9c83d99764fa9828091b2bea400786d9fee43" alt="Image" width="54%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.2 1個流しの工程のサイクルタイムとタクトタイムの関係</div> </div>


働，サポート，サービスなどの「入力」

・入力を消費し価値あるものを創造・維持するための「変換(付加価値生成)プロセス」

・中間物または最終生産物としての製品・サービスといった「出力」

入力を生産など価値形成プロセスで変換し，価値ある出力を創出する．出力は，別の組織である川上部門への入力である場合，顧客への製品・サービスの提供等の場合などがある．

また，プロセスモデルの考え方を取り入れた品質リスクのマネジメントでは，

・入力の種類，質及び量が，現状の業務に対して適切であること

・変換プロセスが効率的であること

・出力が後工程や顧客・市場に求められている仕様に合っていることに着日して，効率的かつ効果的に進める.

このようにプロセスをマネジメントするには, 入力, 変換プロセス, 出力に関する十分な知識がなければならない. これらに加えて,

・実際の出力の比較対象となる基準やベンチマーク(指標)

・基準との差異の情報を伝達し，差を低減するためのフィードバック・チャンネル

が定められていれば, 入力を変換するプロセスのモニタリングによる傾向管理も可能になって, プロセスのマネジメント力の向上にもなる.

プロセスの結果の評価については，営業活動における顧客訪問回数などの出力だけでなく，図8.2.3に示すように，当該組織とは価値体系の異なる顧客などの評価主体がかかわる売上高などのアウトカム(成果)，さらに生活革新や新たな産業の創出など社会的に大きな影響や変化を与えたかのインパクト，という3つの見方がある．アウトカムの視点から，プロセスの評価指標と標準化についてPDCAのマネジメントサイクルを回すことで，効率性に加えて効果のあるプロセスのマネジメントができる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//e82b3ea6-b385-4426-8034-213e6af33664/markdown_1/imgs/img_in_image_box_98_957_896_1363.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A21Z%2F-1%2F%2F7c4989479c4537b1ead8457b117c90d0536e4afdeec5d83f2d825141e1fd5acb" alt="Image" width="67%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.3 3つの評価の視点：出力(アウトプット)、アウトカムとインパクト</div> </div>


<div style="text-align: center;"><div style="text-align: center;">表 8.2.1 マネジメント対象の選択基準の要点</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>インプットを統制する場合</td><td style='text-align: center; word-wrap: break-word;'>プロセスを統制する場合</td><td style='text-align: center; word-wrap: break-word;'>アウトプットを統制する場合</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>・プロセスやアウトプットをモニターするのが不可能</td><td style='text-align: center; word-wrap: break-word;'>・プロセスをモニターまたは測定，もしくは両方できる・プロセスの測定もしくはモニターのコストが安い</td><td style='text-align: center; word-wrap: break-word;'>・アウトプットをモニターまたは測定，もしくは両方ができる</td></tr><tr><td rowspan="2">・インプットのコストがアウトプットの価値に大きく関係する(例：コンピュータチップの金属部品)・品質または安全性，もしくは両方が重要</td><td rowspan="2">・標準化が安全性または品質，もしくは両方にとっての必須条件・因果関係が理解できている・プロセスの独自性もしくは発展性が戦略的優位性へとつながる</td><td style='text-align: center; word-wrap: break-word;'>・アウトプットの測定もしくはモニターのコストが安い</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>・因果関係があまり理解できていない・自由な環境下でのイノベーションが求められている</td></tr></table>

(出典) サイモンズ(2003)：『戦略評価の経営学一戦略の実行を支える業績評価と会計システム』(伊藤邦雄訳)，p.87，ダイヤモンド社.

##### ② プロセスの蓄積情報と技術的な検討

プロセスが定義され基準値や守るべき標準が明らかになれば、「基準値や標準からの実態のズレ(deviation)」に着目して、リスク(の種類)が発見できる。また、標準を守っても結果を伴わないことがある。これは標準化の前提条件と実態が整合していない場合に生じる。標準の妥当性を検証する試験や検査方法の問題になる。試験や検査の計画段階で品質リスク(故障モードや不適合モード)の見落としを少なくするには、蓄積している品質情報やFMEAの手法を活用する。

入力，変換プロセス，出力のどれをマネジメントすべかを決定する際に考えるべきポイントの一例を，表8.2.1に示す。

##### (2) 業務の品質リスクマネジメント

##### 1) リスクマネジメントの進め方

リスクマネジメントの手順は、図8.2.4に示す通りである。

リスクマネジメントの対象は活動であり、複数の活動から形成されるステッ

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//e82b3ea6-b385-4426-8034-213e6af33664/markdown_3/imgs/img_in_image_box_340_207_615_561.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A22Z%2F-1%2F%2F711eff5e043df829f8e4c60bcb349d74eddf19ae4b2339d56149f0c8da623d34" alt="Image" width="23%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.4 リスクマネジメントの手順</div> </div>


プ，さらに複数のステップから形成される業務プロセスである。リスクを生み出す源は活動レベルで作り込まれるが，その影響を読むためには関連する活動の集合である業務プロセス全体を明らかにする。これが「業務プロセスのマップ化」である。

リスク評価の前提として重要なのは，組織の計画と戦略であり，

・経営環境(組織の強みや弱み，脅威，内外の利害関係者)

・組織の状況(組織のビジョン，基本方針，戦略と組織能力，ロードマップなど)

・リスクマネジメントの状況(ビジョンを達成するための各部門の役割. 重要な業務プロセスの標準化, 連携と責任, 目標達成の経営資源, コストなど)

・リスク評価基準(企業の社会的責任を考慮したリスクの許容性や処理対策の満たすべき基準など)

の現状分析に基づき，活動に求められる機能に着目してリスクを想定し評価す

る．業務プロセスにおけるリスクは，

・戦略リスク：業務リスク同定の前提となる基本方針，戦略と組織能力など成長と持続性にかかわる中長期的なリスク

・業務リスク：活動やプロセスの機能遂行にかかわるリスク

・報告リスク：活動の進捗状況の不正確なあるいはタイミングを失した報告

に類型化できる。

フィンケルシュタイン $ ^{[10]} $によれば, 失敗企業に多いのは,

・自社の実力を過信しすぎる

・誤った前提に基づいて行動する

・情報をきちんと伝達する仕組みがない

・経営者も都合の悪い意見を聞き入れない

である．情報が正確に必要なところへの確に届くようにするため，報告リスクを明らかにして改善することが最も重要になる．組織の意思決定者が直面する問題として，決定的情報を握る者が意思決定者と利害を異にする時，正しい決定に必要な情報が完全かつ正確に報告されないかもしれない．第13章で詳述するデザインレビューは，新製品開発という業務プロセスで問題が潜在化することによるリスクを，より早く組織として共有化し解決の遡上にのせて，報告リスクを低減するマネジメントツールである．

新製品開発に関する業務リスクでは，図8.1.4に示したように，3つのリスク(マーケットリスク，技術リスクとコンセプチュアルスキル)に大別できる。このようにリスク想定のフレームワークを明らかにすると，木を見て森を見ないことで発生しやすい見落としを少なくできる。また，第11章で詳述するプロセスのFMEAの方法論が，業務プロセスにおける負の機能，負の出力の考え方に基づいてリスクを同定するアプローチとして有用である。

リスク評価は，起こりやすさと損害の大きさの２つの軸で行う．図8.1.1に示したようにリスクマッピングして，許容不可のリスクが重要なリスクになる．マッピングによるフィードバックでリスクの相互調整が容易になり，リスク評価の精度を高めることができる．

リスクのコントロールでは許容できるレベルへ低減できる方策を複数検討し，表2.1.1に示した項目を考慮して方策の評価と確認を進め，最適な方策を実施する.

重点的にマネジメントすべきリスクが明らかになっていれば、対策の遂行状況などに関する情報よりリスクの報告とレビューが的確になって報告リスクが低減し、業務の進捗管理が向上する。

##### 2）業務のリスクアセスメントとは

評価に関する日本語の語彙は少なく，「評価」の一語といってよいほどである．英語で「評価」にかかわる用語は豊富である．assessment.appraisal.evaluation,monitoring,reviewなどがある．また，評価対象の客体であるprojectとprogramの概念も明確に識別されている．programは一つの目的を達成する関連する活動の集まりであり，projectはprogramの要素に相当する．projectあるいはprogramの評価に対応する英語はassessmentが用いられる．assessmentは，実施する時期に応じてappraisal,evaluation,monitoringに識別されている†．appraisalはprojectあるいはprogramの活動が始まる前に行う事前評価であり，evaluationは活動後に行われる評価．monitoringは活動中に実施する評価になる．reviewはassessmentの一つの方法であり

project や program のライン業務からは少し離れた立場にあるレビュアにより(認知を認知するメタ認知の目的で)行い,業務の出力に対する助言事項も含む.

したがって，事を始める前だけでなく，実行中であれば必要に応じマイルストーンで逐次実施し，そして事が終わった後では総括を行う．図8.2.4のリスクマネジメント手順の「リスクの報告とレビュー」が大切であり，PDCAのサイクルを回すことが基本になる．

##### 3）品質リスクアセスメントと仕事の可視化

##### ① 考え方を明確にした業務プロセスの標準化

開発・設計プロセスなど業務の流れの大枠は標準化しているが，活動レベルまでは明確に定めていない場合が多い，もしくは具体的に記述していない場合が多い．ルーティン化している定型業務（トランザクション）ではなく，図4.2.2に示したように入力の同定から始まり，知識とスキル等による概念形成とその評価を行い出力する知識ベースの仕事では，何をすればよいか細部にわたり記述することができない，あるいは意味が少ないとの考え方が根強いことによる．

このように業務の内容によって，どこまで仕事の進め方を前もって決めることができるかは異なってくる．業務を，図8.2.5に示すように，処理内容と関係する組織の2つの軸を考慮して，2×2のマトリクスで4つのパターンに分類する．タイプⅠの業務は特定の目的，したがって繰り返しがあり短時間に処理できる業務であり，前もって仕事の内容を標準化できる特徴を有する．製造工程における加工や組み立ての仕事が該当し，作業手順に至るまで詳細に内容を定めることができる．決めたことを守ることができるかどうかがリスクであり，事前の教育・訓練がリスクマネジメントで大きな役割を有する．

イノベーションを伴う新製品開発はタイプⅣの類型に属し，知識ベースの仕事が主であり，開発のみでなく営業から生産など部門横断的な業務になる，今までにない技術方式を採用するなど革新的な場合には，事業化や製品化まで

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//2a151b74-9fdf-48a9-8900-7c7a5f48cf85/markdown_2/imgs/img_in_chart_box_277_207_774_590.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2Fe70be0db1e7015a0279644fd75800074df0563f0b1b503207da74b072f66a14a" alt="Image" width="41%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.5 業務の内容の分類</div> </div>


10年以上要する場合もあり，必要なことを漏れなく予測して仕事を進めるようにはいかない。やってみなくてはわからないことが必ず発生する。図8.2.6に示すように，目的・目標／活動方針を定めてこれらを遂行できる能力を有する人を選ぶことで，逐次リスクを想定し対応を考え実行できるようにプログラム化する。ミルグロムら $ ^{[11]} $の言葉を使えば，「あらゆる可能な状況それぞれについて各当事者が何を行うべきかが正確に指定されている完備的な契約ではなく，目標や目的，全般的に適用される一般的条項，予期しない事態が発生した時に何をなすべきかを決定する基準，誰がどのような行動権限を持つのか，取りうる行動の範囲の限定等について合意する当事者間の関係の枠組みについてのみ合意による関係的契約」による仕事の進め方になる。

##### ② 関係的契約とリスクマネジメント

知識／技能等の評価と当事者間の関係の枠組みを核とする関係的契約に基づく仕事の進め方が中心となる，新製品開発でのリスクマネジメントについて考えてみよう.

開発に携わる技術者の優先順位が最も高いのは技術の革新性であり，有する経営資源を収益へと価値化するビジネスモデルやその過程でのリスクアセスメントには関心が低い，定型的でリスクが低い図8.2.5のタイプIの業務では

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//2a151b74-9fdf-48a9-8900-7c7a5f48cf85/markdown_3/imgs/img_in_image_box_105_197_847_1041.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2F9994c0783059283c4271faa7f76c7da405220f729ffee64ba6949d01cf387985" alt="Image" width="62%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.6 仕事を進めるプロセスの標準化</div> </div>


決めたことを守らなかった時の影響を明らかにして，情報を共有して守るインセンティブにしている．未知あるいは不確実なことへ取り組みリスクが格段に高いタイプⅣの業務でこそ，リスクアセスメントの必要性は一段と高い．

タイプⅠの業務のように細部にわたり事前に決めるプログラム化はできないので，図8.2.6に示したように，

・仕事の目的・目標／活動方針の明確化

・プロセスの活動・要素業務を明らかにし

・仕事を遂行するために必要な知識／技能等を有している人材の選抜

が業務の成果を達成する要点になる．仕事は一方向に流れるのではなく．ベンチマーキングや事業環境の変化でフィードバックが必要になり，目標が変更になることもある．チームで内外の情報にオープンなコミュニケーション形態で接してコラボレーションを進め，ベースラインを共有し，変化や変更に柔軟に対応する．チームによる仕事では，コンフリクトな問題をまとめ，報告リスクをマネジメントするリーダの役割が大きい．あいまいで人により認識が異なっている状況では，情報や知識をパブリック化するコンセプチュアルスキルが重要である．基本方針を明らかにしてベースラインを共有・共用できるようにする．チームのメンバーその人にしかできない属人的なところと，組織能力を活用する知識デザインの微妙なバランスをとるマネジメントが要求される．

例えば，計画に遺漏や問題があれば，後の実施段階で顕在化する．実施段階でのリスクを計画に織り込んでいれば，変更が必要になっても早く発見できて柔軟に対応できる．業務リスクを想定し，事前に対応を考えて臨めばモード切替えは早い．「備えあれば憂いなし」であり，初期のスピードがその後の進捗を支配することが多い．

進捗管理を「遅れた場合の対応」から「遅れないように対応」する考え方で進めている一例を，図8.2.7に示す．業務にかかわる問題点をリスクアセスメントにより明らかにし，チームの階層別にアクションリストを明らかにする，としている．そしてフォローアップを消し込みチェックにより進めて，確実に履行へ結び付ける．具体的には，開発する製品を階層化してシステムからユニット単位での品質保証を充実して，目標や限界に対する余裕を把握する余裕度試験に切り替え，開発目標値が変化しても試験結果を活用できるように，仕事の進め方を見直している．自らコントロールできる要因による設計変更を極力少なくする．顧客要件の変化などコントロールが難しい外部要因に起因する「正しい設計変更」のみにすれば設計変更は少なくなる．市場・顧客に焦点を合わせ，メンバー間で共有し実際にコントロールを可能にする仕組みを根付かせていけば，目標未達による遅延も少なくなる．遅延したとしても積み重ねてきた開発成果を活かすことができる．開発のリスクマネジメントの意義の一つ

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d8121e21-063f-4262-8e4d-766c7fe0c596/markdown_0/imgs/img_in_image_box_86_203_823_756.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A56Z%2F-1%2F%2F9fd8bcac79b0e807fffc790b097aad0ce544bfb1c3037432b6bc3bf84da1b3b7" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.7 「考え方」を明確にした新製品開発の進め方とマネジメントの一例</div> </div>


である。

##### ③ PDPC を活用した仕事の可視化

達成したい目標に向け一連の実施事項と想定される結果(状況変化)時系列的で図に表し可視化することにより，着手時点の計画が充実するとともに，実行途上での適切かつ臨機応変な判断をうながし目標達成の確率を高める手法としてPDPC(Process Decision Program Chart，過程決定計画図)がある．この例を図8.2.8と図8.2.9に示す．

##### (a) ニーズを把握するための PDPC

図8.2.8は，競合製品と市場・顧客の実態を調査して顧客要求品質を企画品質に具体化し，これを実現するために不足している技術課題抽出に必要な情報収集を進める仕事の流れを示している．市場・顧客のニーズと，これを実現するシーズである技術との対応解析に至るまでの仕事の流れを時系列に表し，それぞれの活動に潜むリスクを想定して調査項目の完備化を図る．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d8121e21-063f-4262-8e4d-766c7fe0c596/markdown_1/imgs/img_in_image_box_200_207_859_791.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A57Z%2F-1%2F%2F2576c4efcb33ff0fb43da6b03b407f8471c9d38c2d636d98fd45090a67cbf968" alt="Image" width="55%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.8 コンビニで必要とされるスキャナーの要求品質把握のPDPC</div> </div>


企画品質設定のシナリオとリスク想定をPDPCで備え，情報やノウハウを蓄積し，市場調査の方法論をプロセスに織り込み蓄積・改善できれば，組織としての共有財産になる.

(b) 開発・設計の基本(構想)設計段階における技術方式選定のPDPC

プロジェクトの基本プロセスについて，図8.2.9は，各段階の重点監視アイテムに関して考えられるリスクをPDPCに織り込んでいる．プロジェクト品質評価指標は，「開発・設計フロー(PDPC)」を利用して，「発生確率が中または小の事象が実際に生起し，その対策に使用した計画外の発生コスト」としている．プロジェクトの定例ミーティングでは，生起したリスク対策を協議する他に，

・「開発・設計フロー(PDPC)」を逐次的に見直し(新たにリスクが生じて

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d8121e21-063f-4262-8e4d-766c7fe0c596/markdown_2/imgs/img_in_image_box_32_199_889_1453.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A57Z%2F-1%2F%2F2ae41c623e4fd66d2a069635612c764843065f8b11a6552883f3a1b1019f2224" alt="Image" width="72%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図8.2.9 開発・設計フローのPDPC</div> </div>


いないか，解決したリスクがあるか)，発生確率(大，中，小)の再評価等

・新たなリソース投入の是非, リスク回避策検討等について協議して, リスクマネジメントを実践している.

これら２つの例のように，目的を達成するために必要な活動は何か，そのリスクはどの程度か，時系列の流れに沿って図解する．目的を達成する活動の流れをスルーで明らかにする過程で，望ましくない結果に至るリスクに気づき，見落としを少なくできる．さらに，PDPCを当事者以外の人も加えて検証（レビュー）すれば，計画での見落としや実行時の気づきの遅れなどのリスク低減へ役立つ．

#### 【参考 8.2.2】生産プロセスにおける作業の標準化の一例

加工や組み立てなどの生産工程では，最良の実践を標準化して守れるように教育・訓練し，問題があれば標準の改定を行っている．標準化では，作業間の連携，後工程に保証すべき特性に加え，必要な経営資源の関係についても明確にするとよい．このような作業標準書の一例を，表8.2.2に示す．リスクマネジメントの視点からは，活動とこれに必要な経営資源を示し，想定される不具合事象の明確化と異常が発生した時の処置を明確にしているところが参考になる．

##### ④ 業務プロセスを可視化する要点とメリット

業務のリスクアセスメントを実施する時には,

・活動(ワーク)の流れと実施手順など

・活動に伴う情報の流れと PDCA サイクルなどのマネジメントシステム

・スキル・知識・技術・コーチングなど人的資源を含む経営資源について，現状を明らかにする。

また，情報的資源は共有できるが移転が難しいという特徴はあるが，組織として蓄積している「標準類」の役割は，業務を効率的かつ効果的に進めるため

<div style="text-align: center;"><div style="text-align: center;">表8.2.2 リスク想定と対応を明らかにしている作業標準書の一例</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>工程名</td><td colspan="5">○○工程</td></tr></table>

に重要である．各種の標準類について，

・環境変化へ対応して見直されているか

・現状の標準が人や部門によって異なっていないか

・ベースラインとして共有できるようになっているか

・言葉では伝えにくいノウハウなどはどのように移転しているか

・情報を伝えるメディアに配慮しているか

などへ目を向ける．日々の朝会やツールボックスミーティングなどダイレクトコミュニケーションの情報メディアで現場の出来事を共有して，良いことはその場でフィードバックするなど，地道な取り組みを継続する．

多くの人の目に触れるように「活動と情報の流れの現状をスルーで可視化」することで、問題の所在が明確になり解決することが多い。

##### ⑤ 新製品開発プロセスの構造とリスクマネジメント

新製品開発の活動は，図4.1.2に示したように，

・プロセスを企画, 開発・設計などステップへ分化した活動の流れ

・各ステップのミッションを主体的に果たす機能別組織とその活動

の横と縦の流れからなるマトリクス構造を有している．プロセスをより小さなステップへ分化することで，マネジメントのPDCAサイクルを短く回すことができる．サイクルタイムを短くすることにより開発プロセス源流での問題を早く発見できるようになる．

技術方式の選定を間違えると大きなフィードバックになるし，市場に品質問題が流出して顕在化しリコールなどの是正措置に至れば影響は大きい．これらの不具合を低減・防止するマネジメントの進め方が，ステップあるいはフェーズの考え方を取り入れた新製品開発である．

新製品開発のステップごとに KPI を定義し把握することで，活動とパフォーマンスの時間的距離を短くすることができる．パフォーマンスの指標である KPI の情報活用することで，活動レベルで是正のアクションがすばやくとれる．是正措置へのフィードバックが短いサイクルタイムでできることに加え、

パフォーマンスに関係するさまざまな活動への関心が高くなる．開発チームのメンバーそれぞれに権限を超えた俯瞰的で多面的な思考を促し．全体最適化などより良いソリューションを生み出す．

課題解決が行き詰まり，仕事のはかどらない状況は，まず活動レベルの現場で起きる．活動レベルでの状況を把握するには，活動レベルの指標 KAI を定める．さらに，1 日の生産数量を当該工程のサイクルタイムに変換するなど KPI を的確に KAI へ転写することで，品質や原価・量に対する達成状況をリアルタイムで発見できるようにすれば，適切な指示による対応，工数の組織的支援などで，解決もスピーディになる．

##### 4）プロセスの FMEA とリスクアセスメント

計画や設計など業務プロセスのリスクアセスメントには，生産工程で加工や組み立ての対象となるワーク(部品や副資材など)の価値化と流れに着目して，品質問題を検討する「工程(プロセスの) FMEA」が有効な手法である．これについては，第11章で述べる．

##### (3) プロセスの標準化による水平展開と改善

「結果をプロセスでマネジメントする」考え方では，発生した個々の具体的な問題(失敗の内容)を一般化・整理して水平展開 $ ^{\dagger} $を行い，プロセス改善を進める．類似の問題が再発しないように未然防止へ取り組み，品質リスクマネジメントを行う．

##### 1）個々の発生問題(特殊解)の一般解化

新製品開発での発生問題を一般化し解決の方法論を明らかにする水平展開によって，組織が過去に経験している類似の問題が発生することは未然防止できる．一般解化の例については，表3.4.1(p.150)を参照することが有用である．

表 3.4.1 の水平展開の例では，「大電流通電部に樹脂を介したカシメ構造を採用した」という具体的な問題について，「『故障モードの把握』と『設計余裕度の確保』」の要素に分解し再整理する(これは，食物を消化しアミノ酸などの栄養素に分解することに当たる). これをさらに設計ステップでの活動ヘフィードバックして，仕事のデザイン(業務プロセスの標準)を見直すことで，未然防止へ結び付ける(消化して栄養素として吸収し，必要なタンパク質を栄養素であるアミノ酸から再構成する. タンパク質を直接食物から取り入れることは異物と見なし拒絶する免疫機能から不可能であり，組織としても価値観の相違等で同様に拒絶反応が起こる).

##### 2）一般解化による業務プロセスの見直し

具体的な問題を一般化して表現して，活動と情報の流れと経営資源の見直し・充実など新製品開発プロセスの改善へ結び付ける．「該当故障モードの把握と限界に対する余裕の確保が不十分」である活動の一つとしてデザインレビューを取り上げ，「新規要素・変更変化点に対するデザインレビューの強化」に示す改善策を検討する．開発新製品の新規要素・変更変化点で前述の問題が多く発生していることに鑑み，「新規要素・変更変化点リスト」を準備し変更によるデメリット評価の情報をオープンにして，設計者自身に加えてレビュアの視点からも確認できるように，デザインレビューの運用改善を進める．

##### 3）重要な価値形成プロセスに関わる7つの課題

公表されている情報を分析して多くの企業が直面している課題を一般解化し、以下の7つに整理して示す。

・人と組織の活性化：環境変化へ対応できる人と組織

・失敗を伝達し活用できる組織のあり方と文化の醸成

・新技術の導入と技術アライアンスのマネジメント

・現場主義とビジョンの補完性に着目した改革と成長への取り組み

・設計仕様の明確な定義，適切な設計余裕の確保及び変化に対応できるバックアップシステムの備え

・情報の伝達と活用：情報を無視できないようにする鍵の構築

・業務の品質管理における不適合流出防止

## 7項目は,

・微妙なバランスが要求される変化とスピードの時代

・変化へ主体的に対応できるのは人であり，補完するのが組織

・的確な対応には，技術が重要な役割

・技術を使いこなして価値化するのは現場

・現場が価値化しやすいように設計・計画を立案・策定

・それには，組織内外の情報を的確に集めて活用できる業務プロセスの構築・運用が重要

・プロセスで品質を作り込む基本は，基準からの変化を発見する能力の視点からリスクマネジメントするために，重要であると考えられる.

##### ① 人と組織の活性化：環境変化へ対応できる人と組織

事業環境変化へ迅速に対応する基本は，「企業は人なり」といわれるように，人と組織の活性化である．これには，事業を取り巻く環境の変化という組織自身がコントロールすることができないイノベーション属性を有する情報を的確に収集・分析して取り入れ，組織内部の，ローカルな情報と融合していくマネジメントが大切になる．また，組織自身の弱点を認識するには，産業構造を超えたベンチマーキングによるベストプラクティス(最良の実践)など，組織の外に目を向けた学習が欠かせない．

組織自身がコントロールできないイノベーティブな変化への備えには，組織自身さらには組織を構成している人の「自律性を基盤とした継続的な改善」が

不可欠である。変化を感じ対応できるように，身につけるべきスキルを明確にする。さらに，スキルマップなどにより不足スキルを可視化して，一人ひとりへ展開して継続的なスキルアップとキャリア形成に反映し，戦略的に人材を育成する重要性が増している。

##### ② 失敗を伝達し活用できる組織のあり方と文化の醸成

「品質と安全」に関する失敗の経験は，事業環境の変化とともに風化して形骸化することがある．時間が経過して「情熱を持った」人が変わる（いなくなる）と，組織としては「品質と安全性の重要性」を継承しているように見えても伝道者がいなくなり，背景を含めて情報を伝達することが難しくなり，形式的になり「スキができる」ことが生じやすくなる．組織における大きな失敗や事故の30年サイクル説の所以である．

また，新製品開発や業務プロセスにおいて，問題を作り込んだ時点と，発見あるいは顕在化する時点に時間差がある．時間差があると因果関係の特定が難しくなり，当事者意識の感覚が徐々に低下することにもなる．因果関係の不明確さや，失敗を語り継ぐ効果に対して認識が低下してくると，品質リスク低減へと先行的に人材育成など経営資源を投入する姿勢にも変化が生じることもある．

このような特徴を有する「品質と安全の確保」については，事業環境が変化する状況で，「変えなければならないこと」と「（時代を超越して）変えてはいけないこと」を峠別することが重要である．「変えてはいけないこと」をしかり守り，愚直に磨きをかけるのが王道である．品質と安全第一の考え方が組織に浸透して実践できるように，組織風土を醸成し業務プロセスを構築する．

さらに，単純なプライオリティ優先思考を超越して，コストと量・時間についても考慮に入れた総合的なマネジメントが真に機能するように，進化させる。

「変えてはいけないこと」の一つにフィードバックループがある．事前にすべてを予測して防止することはできない．品質や安全に関して「まずい」と思

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//b16068a6-6e6d-4c3f-9770-50ba54149851/markdown_4/imgs/img_in_image_box_0_1505_62_1679.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F1146d80bd73a0b24e0b3874fb7344e3425e0078004e6ed29f32dd57b17d55516" alt="Image" width="5%" /></div>


った段階で，方針やマネジメントにフィードバックして組織的な対応ができるようにすれば，問題の拡大と連鎖を防ぐことができる．このように現場を重視し，熟知した経営資源の配分により働きやすい環境整備へ地道にかつ愚直に取り組むことが，持続的な企業の成長に結び付く．

製品事故情報においても時系列的な見方でフォローアップを行えば，問題が早く発見できる。ある短時間の断面（クロスセクション）で潜在化している問題を発見するには，変化があっても少ないので，観測対象を多くする必要がある。時系列で継続的にフォローアップして時間的な変化を検出することで，クロスセクションの問題を補完して解決できる場合がある。この意義は高いといえる。

##### ③ 新技術の導入と技術アライアンスのマネジメント

技術開発は企業の持続的な成長には不可欠である．この意味で，技術戦略とこれを実行できる組織能力のあり方が注目されている．技術戦略では，必要とする技術をすべて自前で備えるのは時間的及び経済的にも不可能である．事業活動を行う領域である戦略ドメインに基づき自ら開発保有するコア技術を明確にし，不足する技術については外部の技術を戦略的に活用する．

技術開発には時間と先行投資が必要となるため，少なくとも10年先を読んでロードマップを作成し，今後の事業展開と必要な技術を明らかにする．技術の開発過程での困難さを地道に粘り強く解決していくとともに，開発した技術の事業展開への積極的な取り組みがさらなる技術の進化と深化を促す源にな

る．「新技術は実験室のデータだけでは限界がある．実際のユーザの声を踏まえて技術改良しないとモノにならない」ということである．

外部の技術を活用するアライアンスには，2つのアプローチがある．戦略的なアプローチ，取引コスト分析によるアプローチである．技術が進化する中で，自社の保有すべきコア技術を明確にしつつ，ブラックボックスを作らずかつ外部から技術進化をタイミングよく取り入れ，技術アライアンスを戦略的に進めていくことが，企業のトランスフォーメーション(変化に合わせて自社の

強味を最大限に発揮する変身力)には不可欠である.

##### ④ 現場主義とビジョンの補完性に着目した改革と成長への取り組み

品質管理を含むマネジメントでは，三現主義の重要性がいわれている．一方で，将来を見据えたビジョンに基づきスキームを明確して戦略的に取り組むことも重視されている．企業戦略がいかに立派であっても，これが実現できなければ絵に描いた餅である．言葉だけでは，組織や人々を巻き込むことは難しい．戦略とともに組織能力が重視されなければならない所以である．

人と組織を巻き込むリーダシップには，実態や真実と結びついた自らの言葉でビジョン，ミッション，バリューを語ることが重要である．これがビジョンの実現に向かっての大きな推進力になる．すなわち，企業が持続的に成長を続けていくためには，情熱のある現場主義とビジョンに基づく経営の２つの考え方を矛盾なく融和させることが必要である．

グローバリゼーションといわれるが，これはローカライゼーションでもある．地域のニーズに応え地域の文化に融和した製品やサービスを提供できることが，グローバルにビジネスを展開して活動するために重要である．この考え方を突き詰めれば，顧客一人ひとりに合った製品あるいはサービスを提供するということになる．現地のことをよく理解する，理解できる人材を登用するあるいは引きつける企業の組織能力が，ローカライゼーションを的確に進める力になる．変えるべき所は変えるローカライゼーションと変えてはいけない所を峠別する考え方を融和して企業のブランド価値を高めることが，グローバリゼーションを促進することになり，結果として売り上げや利益の増加をもたらすことになる．"Learn locally, Think and act globally."(ローカルに学び，グローバルに考え行動する)である．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//828ea9b7-0cca-4700-80e0-dd71c54397f2/markdown_1/imgs/img_in_image_box_0_1146_61_1345.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A25Z%2F-1%2F%2Fedb717be3d1d4e1083bebe752b5960f4dc1017c9f9d34bbb5ccd3c79ec40c07c" alt="Image" width="5%" /></div>


## ⑤ 設計仕様の明確な定義，適切な設計余裕の確保及び変化に対応できるバックアップシステムの備え

製品やシステムの設計ではリスクマネジメントの考え方を取り入れて、局所

的な故障やヒューマンエラーが連鎖して安全性や社会的な信頼を阻害する影響へ拡大しないようにする。技術的な視点からの分析を深めて，製品機能を果たす原理・方式・構造や業務プロセスのフローについて可視化し，さらにパラメータ化して果たすべき目標を客観的かつ検証可能な形に表現する。これにより，機能を果たすか否かの局所的評価のみでなく，配置や構造などについても俯瞰的な視点よりデメリット(リスク)が潜在化しないように，衆知を集め分析・評価するインセンティブが機能する。「デメリットを分析することが，設計の妥当性や限界に対して適切な設計余裕を確保する道である」という考え方に立脚したプロフェッショナリズムである。

仕様とこれを実現する原理・方式の潜在化リスクについて明らかにして，構想段階で十分に時間と人をかけて検討を進め，使用の段階では品質やさらに安全にかかわる問題へ拡大して影響しないよう「使用の信頼性」改善に取り組む．「仕様の信頼性」を「使用の信頼性」に結び付けるためには，機能とパラメータの定量的な関係についての基礎データを製品設計に先行して準備して，設計の最適化に活用する．問題が発生すれば原因究明を行い，再発防止するとともに，発見能力を高め問題の流出を防止する．顧客要件や目標など目的を見すえて組織の有する専門的能力を発揮するには，関連する部署へ情報を無視できないようにフィードバックできるかが鍵になる．

建設や開発の機会が少なくなってくると，設備や製品の構造や機能について理解し十分な知識を持っている人が少なくなってくる．技術標準などにより組織として伝達する標準化が行われているが，仕様や設計根拠について十分に記述されているかは疑問があることも少なくない．「どのようなリスクを考慮に入れて仕様や設計根拠の妥当性を検証したのか？」に関する情報が属人的で．組織として語り継ぐことが難しくなっている場合が多い．ざっくばらんにもっと厳しい状況を想定しなくていいのかなど，オープンに議論できる場を整えて活発な議論ができるようになれば，異なる分野の知識・常識を取り入れることができる．

##### ⑥ 情報の伝達と活用：情報を無視できないようにする鍵の構築

事故や経営における問題が起きると，未然防止がなぜできなかったのかと問われることが多い．未然防止ができなかった説明として，「事前にはわからなかった」，「想定外であった」ということがある．実際には，事前に兆候があったということがほとんどである．組織内外の情報を活用してリスクを想定し備えることができる人の存在が重要であり，さらに関連部署を巻き込む能力と水平展開できる説得能力の発揮が必要となる．

兆候に関する情報を無視できないように流すことが、「未然防止の鍵」である．組織の関連部署を巻き込むには，情報を伝えるメディアの選択が重要である．情報のリッチネスとリーチの概念を理解して，メディアを選択し，複数のメディアを組み合わせ活用して，アクションをとる部署に理解しやすいように情報を伝える．組織として情報伝達のシステムを整備し，運用を通してシステムの問題点を継続的に改善することが重要であることはいうまでもない．

例えば，チームによる作業で確認などの動作を行わず問題が発生する「基本動作欠落」を分析すると，以下の例がある。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//828ea9b7-0cca-4700-80e0-dd71c54397f2/markdown_3/imgs/img_in_image_box_0_859_86_1082.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F7a1b1eec948c1060447bfd07b917a6e73a525749f7f8950faef0cb8715d98ee7" alt="Image" width="7%" /></div>


• 作業前にコンフィグレーションの変化していることが考慮されていない

など変化への備えが不足している

一配置や作業環境の変化などコンフィグレーションを考慮しないで作業を行ったため，無理な作業姿勢による不適合の発生

一作業手順策定の背景分析が不十分なことによる適用の妥当性の判断の誤り

一守らなかった時の影響の記述が不十分で，作業時に適切な対応が遅れる

・作業手順の不備で必要な手順が欠落している

一設備トラブルで作業の一時中断が必要となったが、作業責任者は自らの立会を考えていたが他作業でできなかった

・マルチタスク(並行して複数の作業を進めている)時の作業手順連脱に対して対応の遅れが発生する.

—他メンバーから連絡があったが、他への対応を優先したため、連絡への対応が遅れる

したがって，作業前の検討段階では作業の場のコンフィグレーションの情報を共有することが重要であり，決めたことを守らなかった時の影響についても明らかにする．作業中においては全体の進捗状況を把握して，マルチタスク時の優先順位を間違えないように異常時の措置をとる．

##### ⑦ 業務の品質管理における不適合流出防止

品質管理では，「不適合を受け取らない」，「不適合を作らない」，「不適合を流出させない」ということがいわれる．不適合を発見する能力が向上すれば，不適合を作らない条件を明らかにでき，不適合を作らない能力も向上する．同様に，「不適合を受け取らない」，「不適合を流出させない」能力も向上する．このことから，試験や検査で不適合を発見する評価システムを整備することは品質管理の基盤を形成する．

業務計画においても，将来をすべて見通して完備な計画を立案することは不可能である．見落としが発生するリスクをゼロにすることはできない．兆候を見落とさないためには，ホールドポイントなどのマイルストーンを設置して，多くの人の目が注ぐようにする．

試験や検査の付加価値は，不適合を後工程に流さないということだけではない．マネジメントの視点からは，以下のことがより一層重要である．すなわち，「モノ」レベルでの応急措置から，問題解決プロセスとリンクさせて再発そして未然防止へ活用し，「コト」レベルであるプロセスを改善する．

試験や検査の情報を活用できる体制を構築し整えることは、それほど容易なことではない。不適合が発見された時には、同様の品質問題が潜在化している範囲を特定できるようにする。「トレーサビリティ」確保で遡る範囲を限定することができれば、問題解決のスピードが速くなり解の収束も早い。トレーサビリティを確保する方法として、先進的な製造企業では「一個流し」(単位工程では常に一個のワークが流れている)、「自工程完結」(前後の工程の約束事、イ

ンタフェースを明確にして守る), 「QA ネットワーク」(始めから終わりまでの工程がスルーで明らかになっており, 不適合の明確な定義と不適合が作り込まれる場合に発見される工程が明確に定義されている)の取り組みが行われている.

##### (4) リスクの考え方と未来への行動様式

変化は好機があること意味し、リスクマネジメントの重要な視点は好機を活かすこと(好機を逸することもリスクの一つ)である.

##### 1）未来に向けた行動様式の改革とリスクの考え方

安定した社会構造の中ではリスクの考え方は芽生えにくい．しかし，現在のように環境変化が速く意思決定のスピードが重視される状況ならば，リスクマネジメントの必要性を前向きに受け止める理解も得やすい．想定リスクを明らかにすることでマネジメントの思想が明確になるとともに，リスク顕在時のシナリオを作成する仕事を通してリスク分析が広くかつ深くなる．

##### 2）意思決定におけるリスクアセスメント

複数の代替案あるいは選択肢から解の一意化を進める意思決定では，代替案の評価が重要な役割を担う．メリットのみでなくデメリットの評価，すなわちリスクアセスメントが解の最適化を決めるといっても過言ではない．

① 可否判断：日本の社会では，物事を決める時に，「やるかやらないか」という判断に重きをおく．「可否判断」という言葉は，「やるかやらないか」ということであり，二者択一型の判断することが日本式の決定の特徴である．

②意思決定：意思決定(decision making)は，戦後紹介された欧米流の決定である．意思決定は複数の選択肢の中から最適案を決めることで，一つの決定をするに当たって，複数の案の中でどの案が最も適切であるか選ぶ行為である．すなわち，意思決定は選択の考え方に基づく行為である．し

たがって，意思決定では，図8.2.6の仕事を進めるプロセスの標準化で示したように，何を決めようとしているのか，真の目的は何かの問いかけの他，それを達成するには，どのような諸案が必要かなど，複数の選択肢を用意することが必要となる.

③意思決定における要点：複数の選択肢が用意されていない場合には，選定の基準やヒト・モノ・カネなどの制約条件をガイドとして，一つのたたき台からより良い案を練り上げ，どのようなマイナス要因があるかを分析する，案を実施した場合のマイナス要因を列挙し，それを発生確率と影響度で評価(リスクアセスメント)し，マイナス面と事前に講じることのできる対策を考慮しながら，最終的な決定を行う.

#### 第Ⅱ部 演習問題

問題1 図 A に示す 70 個の機械部品の寿命データのヒストグラムについて、以下の問いに答えよ.

(1) 故障率を求めて，図示せよ．また，故障のパターンについて考察せよ．

(2) 信頼度を求めて，図示せよ.

(3)  $ B_{10} $ ライフを求めよ.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//20bc75e8-5749-40c5-91f5-22f30bba8be2/markdown_2/imgs/img_in_chart_box_116_640_808_1127.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2Ff5e9e17da4c3e75768cb11bd376c3f35b453b9fdedc32c832b153efbfe5a9bbe" alt="Image" width="58%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 A 70 個の機械部品の寿命データのヒストグラム</div> </div>


問題2 人間信頼性の項で述べたように，自動化を取り入れた製品の設計ではユーザとの認知的インタフェースへの配慮が必要になる。ある記念スタンプ機械について、「スリットに紙を差し込むと自動的にスタンプが押される記念スタンプ機械のユーザが、何度もやり直しをしている光景」が見受けられた。これについて、

・設計者は紙を入れただけでスタンプを押す自動機械が便利だと考えているが、ユーザは紙のどちら向きに押されるかにこだわる。

・したがって, スタンプを押す部分を手動で動かす方式にした方がよい. 「使うのに労力がいる機械にする方が, むしろユーザに使いやすいものになる」場合がある.

・ユーザが機械に対し，どのような振舞いを期待するか，こうした問題を考慮するため認知心理学者を開発チームに加え，製品開発の最終段階ではなく開発のスタート時からユーザにとっての使いやすさを考えることが必要である.

という意見が寄せられた．これらの意見について．ユーザインタフェースを設計する視点から考察して見解を述べよ．

問題3 次の２つのシステムについて以下の問いに答えよ.

• 並直列システム：システムとしての機能を果たすために直列に結合した後で、信頼性を向上するために並列に結合したシステム

• 直並列システム：同じ機能を果たす部品を並列に結合して信頼性を高め，その後システムとしての機能を果たすために直列に結合したシステム

(1) 図 B に示す 2 つのシステム (並直列システムと直並列システム) の信頼度を求めよ．なお，☐ 内の数字はシステムの構成要素の信頼度を示す．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//20bc75e8-5749-40c5-91f5-22f30bba8be2/markdown_3/imgs/img_in_image_box_30_923_460_1131.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2Fc3335d75ae9140f8428e7353e9f8848a5cafbaa8f9ff7840c92d294ce198bde6" alt="Image" width="36%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 並直列システム</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//20bc75e8-5749-40c5-91f5-22f30bba8be2/markdown_3/imgs/img_in_image_box_491_926_887_1093.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2F73c947334d0014ecab9b9891864d590d7e02dcb20350f92859a00522b87c9bc3" alt="Image" width="33%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 直並列システム</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図 B 構成要素の信頼度とシステム構成</div> </div>


(2) 構成要素の信頼度が同じであれば, 並直列システムの信頼度は直並列システムの信頼度より高くなる. 信頼度を直接計算することで確認できるが, システム構成(コンフィグレーション)の相違点に着目して, その理由を述べよ.

(3) 高信頼度のシステムを形成するには2つのアプローチがある．故障等の失敗の経験を積んで部品レベルの信頼性が向上すると．システムレベルでの冗長化によるアプローチの必要性は少なくなる．これはなぜか．(2)の理由を敷衍して説明せよ．

・同じ機能を有するシステムを並列など冗長化して信頼性を高めるアプローチ

・システムの構成要素である部品の信頼性を高めることにより高い信頼性のあるシステムを形成するアプローチ

問題 4 信頼度 95% の部品を並列システムにして，信頼度を 99.9% 以上にしたい。このためには部品を少なくとも何個以上用いなければならないか。

問題5 あるディーゼルエンジン燃料システムは，図Cに示す5つの装置で構成されている．各装置の故障率が表Aのように与えられている時，ディーゼルエンジン燃料システムのMTBF及び1,000時間における信頼度を求めよ．また，信頼度が90％である時間(B₁₀ライフ)はどうなるか．ただし，各装置の故障率はCFRと考えよ．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//20bc75e8-5749-40c5-91f5-22f30bba8be2/markdown_4/imgs/img_in_image_box_90_744_829_813.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A25Z%2F-1%2F%2F07e5fbf43f734aa81983fae8f6ea45bfb9e21d1ebe19c26a081d99c17a14242b" alt="Image" width="62%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 C ディーゼルエンジン燃料システムの信頼ブロック図</div> </div>


<div style="text-align: center;"><div style="text-align: center;">表 A 各装置の故障率</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>装置名</td><td style='text-align: center; word-wrap: break-word;'>故障率： $ \lambda_{i}(10^{-6}/ $時間 $</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>燃料供給装置</td><td style='text-align: center; word-wrap: break-word;'>1</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>燃料圧送装置</td><td style='text-align: center; word-wrap: break-word;'>5</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>燃料噴射装置</td><td style='text-align: center; word-wrap: break-word;'>7</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>驅動装置</td><td style='text-align: center; word-wrap: break-word;'>4</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>調速装置</td><td style='text-align: center; word-wrap: break-word;'>2</td></tr></table>

問題6 コヒレントシステムについて以下の問いに答えよ.

(1) 2つの構成要素からなるコヒレントシステムの構造関数φ(x₁, x₂)は, コヒレント構造関数の性質を用いると, 以下のように表現できることを示せ.

 $$ \phi\left(x_{1},x_{2}\right)=x_{1}x_{2}+x_{1}\left(1-x_{2}\right)\phi\left(1,0\right)+x_{2}\left(1-x_{1}\right)\phi\left(1,0\right) $$ 

(2) (1)の性質を用いて, 3つの構成要素からなる並列システムの構造関数  $ \phi(x_{1}, x_{2}, \ldots) $

 $ x_{3} $ を求めよ.

(3)  $ \phi(1,0)=0 $ かつ  $ \phi(0,1)=1 $ はあり得るか？ コヒレントシステムを定義する時に用いた「無関係(irrelevant)」の考え方を利用して，説明せよ.

問題7 図Dのシステム1, 2について以下の問に答えよ. なお $ X_i, Y_i $は各要素 $ i $と $ j $の状態を示す2値確率変数(1の時は正常に機能, 0の時は故障)であり, 互いに独立とする.

(1) システム 1 の構造関数を，分解法の手順を適用して求めよ.

(2) システム 2 のミニマル・カットセットをすべて求めよ.

(3)  $ E(X_i) = p, E(Y_j) = q $ ( $ i = 1, 2, j = 1, 2 $) として, システム 1, 2 それぞれの信頼度を求めよ.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a8edf440-fb5d-4749-96e6-055651aef288/markdown_0/imgs/img_in_image_box_56_701_347_906.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A23Z%2F-1%2F%2F68b65026d6f014184121ba02cc2685d7327c1cc9fb174796a037d55a1665db6f" alt="Image" width="24%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) システム 1</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a8edf440-fb5d-4749-96e6-055651aef288/markdown_0/imgs/img_in_image_box_426_703_847_912.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A23Z%2F-1%2F%2F1c4b8856c2a57dbc25ca85798ca29713cd039b7e6b1b5d36c4e95b53fe204abd" alt="Image" width="35%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) システム 2</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図D 2つのタイプのシステム構成</div> </div>


問題8 図Eの直並列システムについて以下の問いに答えよ.

(1) すべてのミニマル・カットセットを求めよ.

(2) 各要素の信頼度は同じでその値を $p$ とする. この時, システム信頼度 $h(p)$ を求めよ.

(3)  $ h^{2}(p) = h(h(p)) $ を求めよ.

(4)  $ h(p) $ は  $ 0 < p < 1 $ の区間に不動点を持つことを示せ.

(5)  $  h^{2}(p) = h(h(p)), h^{3}(p) = h(h(h(p))), \cdots  $ と定義する時,  $ \lim_{n\to\infty} h^n(p) $ を求めて図示せよ.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a8edf440-fb5d-4749-96e6-055651aef288/markdown_1/imgs/img_in_image_box_319_211_766_355.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2Fc6b7beaf7f5e914b8c5fc11bf7f2ec475476fa484b6e97a190c03ac856c4dcd6" alt="Image" width="37%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図E 直並列システム</div> </div>


問題9 品質リスクマネジメントについて, 8.2節(3)項で述べた「重要な価値形成プロセスに関わる7つの課題」から,

・失敗を伝達し活用できる組織のあり方と文化の醸成

・情報の伝達と活用：情報を無視できないようにする鍵の構築の２つの課題について以下の問いに答えよ.

(1) コミットメントしている重要な価値形成(業務)プロセスを一つ取り上げ, 価値形成プロセスに焦点を合わせた経営資源の形成と活用について, 図3.2.2(p.123)に示した「プロセスモデルに基づく組織の継続的な改善への取り組み」を参考にして, 以下の要素,

·人材(人財)

·設備／裝置

· 方法論

·技術·標準類

・結果の測定・評価

に分けて明らかにせよ。

(2) 価値形成プロセスについて２つの課題に関するリスクを想定し，想定した背景について表Bのフォーマットを利用してまとめよ.

なお, それぞれの課題についてのリスク想定の背景説明では, 想定のヒントのところに記してあるキーワードを引用せよ.

<div style="text-align: center;"><div style="text-align: center;">表 B 想定リスクの種類と背景の説明</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>課題</td><td style='text-align: center; word-wrap: break-word;'>想定したリスクの種類</td><td colspan="2">リスクを想定した業務プロセスの背景と説明</td></tr><tr><td rowspan="2">失敗を伝達し活用できる組織のあり方と文化の醸成</td><td rowspan="2"></td><td style='text-align: center; word-wrap: break-word;'>業務プロセスの説明</td><td style='text-align: center; word-wrap: break-word;'></td></tr><tr><td style='text-align: center; word-wrap: break-word;'>背景の説明</td><td style='text-align: center; word-wrap: break-word;'></td></tr><tr><td rowspan="2">情報の伝達と活用：情報を無視できないようにする鍵の構築</td><td rowspan="2"></td><td style='text-align: center; word-wrap: break-word;'>業務プロセスの説明</td><td style='text-align: center; word-wrap: break-word;'></td></tr><tr><td style='text-align: center; word-wrap: break-word;'>背景の説明</td><td style='text-align: center; word-wrap: break-word;'></td></tr></table>

(3) 想定したリスクについて, 表 C の評価基準に従って図 F にリスクマッピングせよ.

<div style="text-align: center;"><div style="text-align: center;">表 C リスク評価基準の一例</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>ランク</td><td style='text-align: center; word-wrap: break-word;'>起こりやすさ(発生頻度)</td><td style='text-align: center; word-wrap: break-word;'>損害の大きさ(影響度)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>年間に数回</td><td style='text-align: center; word-wrap: break-word;'>組織の存亡にかかわる影響</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>年間に1回程度</td><td style='text-align: center; word-wrap: break-word;'>組織に対する大きな信頼失墜への影響</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>5年に1回程度</td><td style='text-align: center; word-wrap: break-word;'>経済的に大きな影響</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>10年に1回程度</td><td style='text-align: center; word-wrap: break-word;'>経済的に小さな影響</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>50年に1回程度</td><td style='text-align: center; word-wrap: break-word;'>業務遂行への影響</td></tr></table>

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a8edf440-fb5d-4749-96e6-055651aef288/markdown_3/imgs/img_in_chart_box_240_196_786_784.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A25Z%2F-1%2F%2Ff2ba7441f7cb9dfdb2fa013d39a9ce31e072b0264e38395e74ba65f894db305f" alt="Image" width="45%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図F 想定したリスクのマッピング</div> </div>


##### 【リスク想定のヒント】

① 「失敗を伝達し活用できる組織のあり方と文化の醸成」におけるリスク想定のキーワード：

• 水平展開を含む再発防止の徹底が未然防止の基本

一組織としての再発防止は，個人としての未然防止になる．これが，標準化の必要性や，組織として一人ひとりを補完して「人の限定合理性」を補う組織が形成される背景でもある

・成功事例とともに「環境変化における失敗事例の学習」の重要性

一環境や構造が変化する状況では、過去の延長線上に未来の成功があるとは限らない

・「品質と安全」に関する基本方針の浸透と必要な経営資源配分の連携

一成果が現れるまでにはリードタイムの長い場合がある．また，理想の姿が安全のように「危険でないこと」であると，「小さな穴」があることに気づくのが遅れて大きな問題に発展する場合がある（「破れ窓理論」）

・組織文化の基調となる思考プロセス及び価値観の重要性

一短期とともに長期的な見方を重視するのか，ロジックを可視化することなど，組織によって必要性や重要性についての考え方は大きく異なる

・継承してきた組織文化の事業環境変化による形骸化

一継承してきた組織文化が形骸化し継承されなくなったことが，類似問題再発の根本原因になっている場合が少なくない

・事業環境が変化する状況での「変えてはいけないこと」と「変えるべきこと」の峠別

一環境の変化とともに組織として「変えるべきこと」と「変えてはいけないこと」の峻別を間違えないようにするには，経営理念の原点へ回帰することも重要である

・「品質と安全」のマネジメントの評価指標の重要性：評価指標の分母に価値観や見方があらわれる

一上級管理者は，分母と分子の比率で定義されている指標の分子ではなく分母の定義を重視すべきである．分母がマネジメントの対象を定義し，ベンチマーキングや環境変化対応で重要な役割を果たす

・事故情報を時系列的な視点から継続的にフォローアップできる体制の整備

一長い目で見れば，小さな変化も識別できるようになる．人が変わっても時系列の情報や分析結果を継承できて，傾向の有意な変化についてフォローできるモニタリングができる組織とは？

② 「情報の伝達と活用：情報を無視できないようにする鍵の構築」におけるリスク想定のキーワード：

・事故の教訓と前兆情報の活用

一事故後に振り返れば，予兆あるいは類似事故の情報があった場合がほとんどである．しかしながら，問題意識の涵養による「気づき」の問題と対策実施を進める壁がある

・情報の伝達と確認：クロスセクションと時系列による2つのタイプの情報の価値化

一時系列で長いスパンで見れば、小さな変化でも発見が容易になる

##### ・レポートシステムのあり方

—Deviation → Incident → Accident へと連鎖の顕在化，ハインリッヒの法顕など，大きな事故や問題の前には小さな出来事，前兆となる事象がある。小さな出来事などの情報を的確に把握して，分析や根本原因究明のシステムにのせて活用できる組織になっているか？

##### ・情報のリッチネスとリーチ

一必要な情報がタイミング良く必要な所に届けるには？情報におけるこれら2つの概念をうまく取り入れ融和する体制はどのようにすれば構築できるのか？

##### ・コミュニケーションのメディア

ーフェース・ツー・フェースや，情報技術の活用等メディアにより情報のリチネスとリーチは変化する

• 水平展開のマネジメント：情報を関連部署に伝え価値化するマネジメント

—個別・具体的な問題を整理して，水平展開により情報の価値化ができる組織にするには？

##### ・情報の価値化

一現場での品質改善，時間の短縮などのアクションに結びつけ情報を価値化するためには，どうすればよいか？

##### ・専門家とは

—いろいろなことをよく知っている人が専門家なのか？「やってはいけないことがわかっている人」が専門家なのか？

• Management by position と Management by professional : マネジメントにおける専門能力の重要性

ーある兆候が重大な問題にどのように連鎖しているかを事前に明らかにするには、理論(ロジック)が必要であり、専門家の活用が欠かせない

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//756f4ce5-d1a4-4923-b86f-06a31ad41835/markdown_0/imgs/img_in_image_box_0_1375_79_1679.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A24Z%2F-1%2F%2F7dc07315be40030de4fbbf30f79b8a3b258db17161acf477f328dcce19a95593" alt="Image" width="6%" /></div>


##### 第Ⅱ部 参考文献

[1] 大富浩(2005)：「製品開発における上流設計の重要性とその方法」，東芝レビュー，Vol. 60，No. 1，pp. 30-35.

[2] サイモンズ(2003)：『戦略評価の経営学一戦略の実行を支える業績評価と会計システム』(伊藤邦雄訳)，ダイヤモンド社.

[3] 下山田 薫(1984):「小松製作所における市場品質情報収集システムについて」.『品質』, Vol. 14, No. 3, pp. 83-87, 日本品質管理学会.

[4] スティール(1991):『技術マネジメント—総合的技術経営戦略の展開』(後藤正之, 山之内昭夫訳), 日本能率協会マネジメントセンタ.

[5] 瀬戸雄三(2011):「私の履歴書(21)」日本経済新聞(2011年5月22日).

[6] テドロー(2011)：『なぜリーダーは『失敗』を認められないのか『不都合な真実』否認が招く危機』(土方奈美訳)，日本経済新聞出版社.

[7] 電気協同研究会報告(1998)：「油入変圧器の保守管理」，『電気協同研究第54巻第5号(その1)』，（社）電気協同研究会。

[8] Hallangel (1993): Human Reliability Analysis Context and Control, Academic Press.

[9] Barlow & Hunter (1960): "Optimum Preventive Maintenance Policies", Operations Research, Vol. 8, No. 1, January-February, pp. 90-100.

[10] フィンケルシュタイン(2004)：『名経営者が，なぜ失敗するのか』(酒井泰介（訳），橋口寛(監訳)，日経BP社.

[11] ミルグロム，ロバーツ(1997)：『組織の経済学』(奥野正寛，伊藤秀史，今井晴雄，西村理，八木甫訳)，NTT出版.

[12] 文部科学省「失敗活用研究会」報告書(2001).

## 第Ⅲ部

# 信頼性手法の理論と活用(1) 一確率と統計モデルによる評価一

故障は，製品やシステムの局所的な変化に始まり，これが拡大・連鎖して機能さらに安全・環境に影響する現象として捉えることができる．このような現象を信頼性特性値に着目して評価する数理モデルには，確率と統計の2つのアプローチが可能である．統計的アプローチは，設計や工程の同一性に着目してマクロ的に評価する目的で信頼性データを効率的に収集し，信頼性特性値について推定・検定する．帰納的に現状を認識して，目標や限界に対する余裕度や改善の必要性について明らかにする方法論である．

確率的アプローチは，変化が発生するメカニズムを確率的な現象として表現して，限界に至る道筋（サンプルパス）をモデル化して初度到達時間分布や平均などに着目し，演繹的に寿命分布などを明らかにすることで，統計的アプローチを補完する方法論になる.

統計と確率の２つのアプローチは，故障を簡易にモデル化してマクロ的に評価する方法論であり，機器解析など詳細な解析の準備段階で有効に活用できる.

### 第9章 信頼性データの解析

故障までの時間や一定時間内の故障回数などの信頼性データには，「数と時間の壁」がある．故障の観測または試験について長い時間を要し，故障データの数を多くすることが難しいという意味である．

「数と時間の壁」の存在が，データの収集や解析においても大きな影響を及ぼしている．例えば，「時間の壁」を克服するために，故障していないサンプルがあっても観測を打ち切ることがある．「打ち切りデータ」を考慮した解析方法が必要になる．

データ解析には，パラメータを考える解析法(パラメトリック法)と考えない解析法(ノン・パラメトリック法)がある．パラメータを考えない代表的な方法はヒストグラムであり，データの図解による可視化や信頼性特性値の意味を理解する時に有効である．

一方，故障データが観測されるメカニズムに着目しモデル化することで，パラメータ化による解析が可能になる．推定の対象をパラメータに置き換えることで，少ないデータで精度の高い解析が可能となる．「数の壁」がある信頼性データでは，ワイブル解析などパラメトリックな方法を適用する場合が多い．

### 9.1 信頼性データの収集と解析の要点

信頼性データ解析の意義は，図9.1.1に示すように，開発段階での寿命試験や市場流通後の故障データに基づき，信頼度，MTTF，故障率など信頼性特性値を明らかにすることである．これにより，信頼性目標の達成状況を把握できるとともに，使用時の点検や取り替え間隔の最適化を進めることができる．設計や計画の改善へ反映するには，第6章のシステム的な見方と第11章のFMEAが要点となる．すなわち，解析対象をシステムとしてとらえ，構成要素や部位別に信頼性データを分析すれば，製品設計や保全方策ヘフィードバックする情報の価値化が容易になる．製品の信頼性目標達成が未達となっている原因や改善策の検討が行いやすい．保全方策では，構成要素へ着目して，時間あるいは状態監視の効果的な適用ができる．

## (1) 信頼性データ収集の要点

信頼性データを観測する場合，機能を果たす主体としての「システム」，機能を果たしていない状態を明確に定義する「故障モード」，そして使用開始後機能を果たさなくなる限界までの時間である「故障までの時間t」が，重要な要素である．吐き出し量などの品質特性の変化が，機能と故障，故障モードと故障までの時間に関係する様子を，図9.1.2に示す．また，使用段階で時間と

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//756f4ce5-d1a4-4923-b86f-06a31ad41835/markdown_4/imgs/img_in_image_box_92_1165_812_1425.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F1e182ace8d14ba409a26f2bec34b82e0a53dbcdbfb55b17daeb275cc636d1b1a" alt="Image" width="60%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.1 信頼性データ解析の流れと価値化</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_0/imgs/img_in_image_box_24_206_838_693.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2Ff1008d7058748aa9f549bad582801fe8f0233416c5c4f59b54ed9ad92a0ed3be" alt="Image" width="68%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.2 信頼性データの構造</div> </div>


ともに変化する要素として「使用環境条件」がある．使用環境によって，故障モードや故障までの時間は影響を受ける．これらを考慮に入れて，信頼性データのコアとなる「故障までの時間」を観測する時の要点を検討してみよう．

## 1）故障までの時間は実時間が原則

故障までの時間を考える時，図9.1.3に示すように，暦時間と実使用時間の2つの意味がある．暦時間は同じであっても使用頻度が異なれば，実使用時間には差が出る．製品によっては，家庭用と業務用で使用する場合では，20倍以上も使用頻度が異なることもある．業務用として使用した場合，暦時間では想定した寿命より極端に短くなることがある．使用時の負荷が経年変化へ影響を与える劣化メカニズムの場合には，暦時間ではなく実使用時間で故障までの時間を把握する．自動車の場合でいえば，走行距離の情報を直接把握できることが望ましいが，暦時間の情報しか得られない場合には，月間走行距離分布の情報を用いて走行距離に変換して解析できるようにする．

加水分解では、水分などの反応条件がそろえば使用していない保管時にも反

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_1/imgs/img_in_image_box_241_196_695_470.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F8af5469c48d91fe4a0d70edbdb8efc463eca6cea650a636de3bc7eadc822ace0" alt="Image" width="38%" /></div>


<div style="text-align: center;"><div style="text-align: center;">暦時間 × 使用頻度 = 実使用時間</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.3 暦時間と実使用時間の関係</div> </div>


応は進行するので，条件がそろった後の暦時間は故障までの時間に含めることになる．故障までの時間に使用していない時間を含めるかどうかは，故障メカニズムを考慮して判断する．

##### 2）使用環境条件の情報

使用環境から加わるストレスのレベルと種類により，故障までの時間は変化する．自動車の部品でいえば，エンジンへの直截と車室内の搭載では振動や温度などのストレスの大きさと頻度が異なり，搭載方法によって故障までの時間は変化する．

例えば, 電子部品のコンデンサでは  $ 10^{\circ}\mathrm{C} $ 半減則がよく知られている. 基準温度  $ T_{1} $ における故障までの時間  $ L_{1} $ と使用温度  $ T_{2} $ での故障までの時間  $ L_{2} $ の間には,

 $$ L_{2}=L_{1}2^{\frac{T_{1}-T_{2}}{10}} $$ 

が成立するというものである．基準温度より10度高い温度で使用されると寿命が1/2になることから，制御基板などの設計では，発熱・放熱などを考慮した熱設計が重要になる．熱などのエネルギーの流れが寿命に影響することを示唆している一例である．

ストレスと寿命の関係を利用すれば，異なる使用環境で観測したデータを同一の使用環境でのデータへ変換することができる．すなわち，使用温度  $ T_{2} $ で

の故障までの時間  $ L_{2} $ を基準温度でのデータ，

 $$ L_{1}=L_{2}2^{-\frac{T_{1}-T_{2}}{10}} $$ 

へ変換すれば，温度条件を  $ T_{1} $ にそろえた解析が可能になる．使用環境条件の情報を収集することで，同じ環境条件でのデータへの変換が可能になり，解析精度を向上できる．

環境条件が時間により変化する場合に劣化とその進行の関係を考えるには，劣化量よりもその時間微分である劣化速度に着目して考えるとよい．溶融亜鉛メッキの腐食速度(g/m²/年)はpHや温度によってかわる．例えば，図9.1.4に示すように，pHが7で中性である純水中の腐食速度は水温が150°F(65℃)に達した時最高となり，それ以上や以下の温度では急激に減少することがわかる．

##### 3）時間の壁と打ち切りデータ

信頼性データは時間，回数，距離などの単位を持つので，図9.1.5の(a)のように，観測対象すべての故障を把握することは難しい場合が多い．n個のサンプルを同時に観測すれば，図9.1.5の(b)に示すように，早く故障したサンプル

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_2/imgs/img_in_chart_box_323_995_704_1402.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A27Z%2F-1%2F%2F6662315097f3e1169fd75e579682ab7d95201966dd19c4cb0b9461b2384a23ea" alt="Image" width="32%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.4 蒸留水中の亜鉛腐食に及ぼす影響</div> </div>


（出典） 日本溶融亜鉛鍍金協会 HP. http://www.aen-mekki.or.jp $ ^{[5]} $ より転載.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_3/imgs/img_in_image_box_92_205_804_597.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2Ffa004b04c7870e1bcf988dfa7571a0b0c16cf6e1ac6bc33334c956a2ea54a083" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) サンプルと故障データ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_3/imgs/img_in_chart_box_485_196_805_595.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2F033c17cda644c59e5f51c8bbe489a427bdf6e74477b6c4b3baaebf83f26f9149" alt="Image" width="26%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 故障順位と故障データ</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.5 n個のサンプルの故障データの観測と「時間の壁」</div> </div>


から順番に故障までの時間を観測できる．したがって，すべてのサンプルの故障を観測しようとすれば，故障までの時間の最大値である  $ t_{(n)} $ の時間が必要となる．最小値  $ t_{(1)} $ に比較すれば，最大値  $ t_{(n)} $ はサンプル数  $ n $ にも依存するが，一桁以上大きくなる場合もある．データを観測するうえでの一つの障壁であり．「時間の壁」といわれている．

時間の壁を克服するには,

・劣化速度を加速して故障するまでの時間を短縮

・観測方法の工夫による観測時間の短縮

の２つの方法がある。

劣化速度を加速して故障までの時間を短縮する方法は，時間当たりに加えるストレスの頻度を多くするとか，加えるストレスのレベルを高くするなど，劣化のスピードを速める「加速寿命試験」の考え方に基づいている．これは，故障メカニズムを支配する律速過程に着目して，温度やpHなどの作用するストレスをコントロールして，短い時間で市場での評価を社内評価により代替する試験方法である．

観測方法の工夫による時間短縮は、すべてのサンプルの故障を観測するので

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_4/imgs/img_in_image_box_117_190_399_574.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A29Z%2F-1%2F%2Fe81562dc5ffc83fd1b072863eb8cfa9224bf43cf5ffa309af4c70cb1946cc992" alt="Image" width="23%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) タイプⅠ(定時)打ち切り方式</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d3acdf81-4622-40cc-b61c-234977662c0d/markdown_4/imgs/img_in_image_box_475_191_713_574.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F0756d653790863bc0eef3935537b2e9b25e4b6b5911337ba764124e499be4d64" alt="Image" width="20%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) タイプⅡ(定数)打ち切り方式</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.6 観測を途中で打ち切る2つの方式</div> </div>


はなく，故障していないサンプルがあっても中途で打ち切る考え方である．中途で観測を打ち切る方式には，図9.1.6に示すように，

・観測する時間  $ t_{0} $ を決めて打ち切る方式

・故障を観測するサンプル数rを決めて打ち切る方式

の２つがある．前者を「タイプⅠ打ち切り方式」あるいは「定時打ち切り方式」．後者を「タイプⅡ打ち切り方式」あるいは「定数打ち切り方式」と呼んでいる．

信頼性データを的確に解析するには，故障しているサンプルの情報に加えて，故障していないサンプルの情報が不可欠である．観測対象であるサンプルを明らかにして，図9.1.6に示すように，一つひとつのサンプルについて，故障の有無と故障までの時間あるいは打ち切り時間を把握できるようにする．

##### (2) 信頼性データ解析における要点

信頼性データを解析する目的は，設計が信頼性目標を満たしているか否かの検証と，現状を把握することによりさらなる信頼性改善が必要かの判断に役立てることにある．信頼性データを解析と考察では，これらの目的を達成できる

ように.

・故障パターンの情報についての解析

• 解析によって得られた情報の技術的な説明が要点になる.

##### １）故障率の情報と故障のパターン

故障パターンは，故障率が時間とともに減少，不変(一定)，増加のいずれであるかに着目することで，それぞれ，

• DFR(Decreasing Failure Rate, 初期故障)型
• CFR(Constant Failure Rate, 偶発故障)型
• IFR(Increasing Failure Rate, 摩耗故障型)型

の３つに分類できる．故障パターンの知見を信頼性データ解析で明らかにすれば，第５章で述べたように，故障を低減する方策を見極める重要な情報が得られる．

##### 2）統計解析と固有技術の融合

信頼性データ解析で得られた情報を設計や改善へ活用するためには，固有技術の立場より解釈・説明することが不可欠である．故障解析・故障対策を進める時の要点として，以下のことを指摘できる．

・故障率について解析して故障パターンが DFR であることが明らかになった場合などは，なぜそのようになるのか故障モードさらに故障メカニズムより技術的に説明できるようにする．技術者を含む多くの関係者を巻き込んで故障の未然防止さらに水平展開する場合には，ストレスと故障メカニズムによる説明が重要となる．

・多くの人が持っているメンタルモデルと異なる結果が統計解析より明らかになった時などは，固有技術との融合を進めることで，新しいメカニズムの発見に結び付くことがある．構造の変更など，設計改善を的確に行うには不可欠な思考プロセスであるともいえる．

すなわち, データ解析から俯瞰的に有為な情報を得ることはできる. しかし, 対策など具体的なアクションへ結び付けるには, 現象が生じるメカニズムを技術的に説明できるようにすることが大切である.

##### 【参考 9.1.1】現象を技術的に説明できないと対策を誤る

電界をかけると分子の並ぶ方向がそろって変異するアクチュエータについて，変位量の劣化の観測結果が図9.1.7のようになった．作動回数が増加するに従って変位量が低減することは事前に想定していたが，作動初期の変位量劣化は予期せざることであり原因究明が必要になった．変位量が低減する現象は同じでも，再び変位量が復元することから発生メカニズムは異なるはずである．したがって，現象の発生メカニズムを技術的に明らかにして適切な対策を実施することが重要になる．このためには，変位量のデータとともに現物を精査してモノレベルで現象を解析することが大切である．

初期に変位量が低下して復元する現象については，図9.1.8に示すように，

・組み付け時バネが片当たりして部分的に押し圧力が大きくなり

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//30713e0d-75e6-4d16-b146-c991769d0511/markdown_1/imgs/img_in_chart_box_138_948_749_1431.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A44Z%2F-1%2F%2Fc9b2ffa82c3692ba3e7c3ed4cf524d67ca50d9fea6bb33b9ad2ecaca6fad48c4" alt="Image" width="51%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.7 アクチュエータの変位量劣化のデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//30713e0d-75e6-4d16-b146-c991769d0511/markdown_2/imgs/img_in_image_box_95_189_891_807.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A45Z%2F-1%2F%2F121db994ce808c5010d133dd27d1015e427ac4506bb7107adc1d31deb0019ba8" alt="Image" width="66%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.8 アクチュエータの作動初期における変位量劣化の技術的な説明</div> </div>


・アクチュエータ素子作動時にバネ端部がシムに食い込んでバネの動きを拘束して変位量の劣化として観測され

・さらにシムの片当たりで食い込みが進むとバネの拘束解放が進み、劣化した変位量の回復が進む

というように，発生メカニズムが明らかになった．この知見に基づき，バネの積層方向の変更，シムの硬度改善などの対策を取ることで，初期の変位量劣化を解決することが可能になった．

##### (3) 2つのタイプのデータ解析手法

##### 1）ノン・パラメトリック法とパラメトリック法

信頼性データを解析して，信頼度，MTTF，B_{10}ライフ，故障率などの信頼性特性値の情報を得る方法には，図9.1.9に示すように，データの分布に関する

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//30713e0d-75e6-4d16-b146-c991769d0511/markdown_3/imgs/img_in_image_box_141_192_725_673.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A46Z%2F-1%2F%2F4b1a6c6db3a3e0827ec5686c38354a298f5df7139220536468547a11e9055dcd" alt="Image" width="49%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.9 2つのタイプのデータ解析手法</div> </div>


るパラメータを仮定するか否かにより,

・ノン・パラメトリック法：解析に際してパラメータを考えないので，信頼性データより直接信頼性特性値を求める方法

・パラメトリック法：信頼性データより分布のパラメータを求め，さらに信頼性特性値を求める方法

の２つのタイプがある．パラメトリック法は，データ解析に際してパラメータを考えるところが，ノン・パラメトリック法と異なる．

ノン・パラメトリック法によるデータ解析は，ヒストグラムから故障率や信頼度を求める方法について，5.1節で述べている．この方法でパラメトリック法と同じ程度の精度の情報を得るには，（パラメトリック法に比べると）1桁多くのデータを必要とする．「数と時間の壁」が厳しい信頼性の分野では活用できる場は少ない．以降ではパラメータにより分布を表現して，信頼性データを解析する方法について説明する．

##### ２）信頼性データの解析で用いられる主な確率分布

##### ① ワイブル分布

ワイブル分布の密度関数は，(9.1.1)式のように与えられて，3つのパラメータγ，m，ηにより表現できる．ワイブル分布の性質については9.2節で詳述する．

 $$ f(t)=\left\{\begin{array}{ll}0&,(0\leq t<\gamma)\\\frac{m}{\eta}\left(\frac{t-\gamma}{\eta}\right)^{m-1}\exp\left[-\left(\frac{t-\gamma}{\eta}\right)^{m}\right],(\gamma\leq t)\end{array}\right. $$ 

##### ② 指数分布

指数分布の密度関数は(9.1.2)式のように与えられ，1つのパラメータηで表現することができる．指数分布の性質については9.3節で詳述する．

 $$ f(t)=\frac{1}{\eta}\exp\left(-\frac{t}{\eta}\right),\ (0\leq t) $$ 

##### ③ 二重指数分布

γ = 0 のワイプル分布に従う確率変数 X の対数をとれば,  $ T = \ln X $ の密度関数は (9.1.3) 式のようになる. ここで  $ \sigma = 1/m $,  $ \mu = \ln \eta $ であり, この分布を二重指数分布と呼ぶ.

 $$ f(t)=\frac{1}{\sigma}e^{\frac{t-\mu}{\sigma}}\exp\left(-e^{\frac{t-\mu}{\sigma}}\right) $$ 

(9.1.3)式の密度関数の表現から明らかなように，μは位置パラメータ，σは形状パラメータである．順序統計量の一次結合を用いてパラメータを容易に推定できる性質を有している．これは，ワイブル分布に従うデータを対数変換してμとσを推定し，さらにワイブル分布のパラメータ m と η を，m = 1/σ，η = e“の関係を利用して推定する場合に活用できる．

##### ④ ガンマ分布

(9.1.2)式の指数分布に従う互いに独立な $n$ 個の確率変数 $X_{1}, X_{2}, \cdots, X_{n}$ の和の分布 $T = X_{1} + X_{2} + \cdots + X_{n}$ を考える．これは密度関数が (9.1.4) 式で与えられるガンマ分布になる．ここで, $\alpha = n, \beta = 1/\eta$ である．

 $$ f(t)=\frac{1}{\Gamma\left(\alpha\right)\beta^{\alpha}}t^{\alpha-1}\exp\left(-\frac{t}{\beta}\right),\left(0\leq t\right) $$ 

確率変数の和に着目するのは，図9.1.10に示すように，ストレスがn回加わると故障するモデルを考えて故障までの時間に注目するからである．ストレスの加わる間隔が(9.1.4)式の指数分布に従うとすれば（このような故障モデルをポアソンショックモデルと呼ぶ），故障までの時間はガンマ分布になる．

(9.1.4)式のガンマ分布に従う確率変数  $ T $ を  $ Z = 2\beta T = 2T/\eta $ と変換すれば， $ Z $ は密度関数が  $ (9.1.5) $ 式で与えられる自由度  $ \phi = 2n $ の  $ \chi^2 $ 分布に従う。

 $$ f(z)=\frac{1}{2^{n}\Gamma(n)}z^{n-1}\exp\left(-\frac{1}{2}z\right),\ (0\leq z) $$ 

##### ⑤ 对数正规分布

確率変数 X が後述の (9.1.7) 式の正規分布に従う時,  $ T = \ln X $ の密度関数は (9.1.6) 式で与えられる対数正規分布に従う. 対数正規分布は, ワイブル分布が注目されるまでは信頼性データの解析で最もよく用いられていた分布である.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_0/imgs/img_in_image_box_129_1143_856_1443.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A25Z%2F-1%2F%2F9520353c8e90a3aafb55afc5fc5ab6fe46be2db6ec2008cf7bb5a82646db8666" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.1.10 n 回のストレスが加わると故障するモデルの寿命分布</div> </div>


現在においても，疲労の故障メカニズムに起因して観測される信頼性データの解析で用いられている。

 $$ f(t)=\frac{1}{\sqrt{2\pi}\sigma}\frac{1}{t}\exp\left[-\frac{\left(\ln t-\mu\right)^{2}}{2\sigma^{2}}\right],\ (0\leq t) $$ 

##### ⑥ 正规分布

平均μ，分散σ²の正規分布の密度関数は(9.1.7)式によって与えられる。

 $$ f(t)=\frac{1}{\sqrt{2\pi}\sigma}\exp\left[-\frac{(t-\mu)^{2}}{2\sigma^{2}}\right] $$ 

工程が管理状態にある時には，図9.1.11に示すように，観測データの変動は偶然変動によるものと考えられ，中心極限定理が成立する前提条件が満たされていることから，正規分布は管理図をはじめとする工程のデータ解析で用いられている.

中心極限定理とは，平均がμで分散がσ²の互いに独立なn個の確率変数

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_1/imgs/img_in_image_box_112_885_660_1090.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F469a40a35665a85d97792e0f8321263292df93c30ebdbc5662e50194b5165b4c" alt="Image" width="46%" /></div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_1/imgs/img_in_image_box_84_1109_817_1442.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F17557df49930d9fed9bee8239dfac6a6373857d935e06efe83fac9b63ce6ab19" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.1.11 標準化され管理されている工程と品質特性の加法モデル</div> </div>


$X_1$, $X_2$, …, $X_n$ の和の分布 $T_n = X_1 + X_2 + \cdots + X_n$ を考える時, $Z_n = \frac{T_n - n\mu}{\sqrt{n}\sigma}$ の漸近分布は $(n \to \infty)$ の時), 平均が $0$ で分散が $1^2$ の $(9.1.8)$ 式の標準正規分布に従うというものである. したがって, $T_n$ は $n$ が大きい時, 近似的に平均 $n\mu$, 分散 $n\sigma^2$ の正規分布に従うと考えることができる.

 $$ f(z)=\frac{1}{\sqrt{2\pi}}\exp\left[-\frac{z^{2}}{2}\right] $$ 

### 9.2 ワイブル解析

ワイブル分布は，信頼性データ解析で最もよく用いられる分布である．故障モデルの一つである最弱リンクモデルから演繹的に導くことができること．ワイブル分布のパラメータや B_{10} ライフなどの信頼性特性値をワイブル型確率紙から容易に求めることができる実用性を兼ね備えている．などの性質を持っている．

ワイブル分布は，形状パラメータｍを変えることで3つの故障パターン(DFR, CFR, IFR)へ自動的に対応できる．データを解析するに当たり，故障パターンについて十分な情報が得られていない状況であっても，適用することができる．

また，フィールドで使用されている製品や機器の故障データは，当該要素より他の要素や部位が故障先に発生すれば故障の観測が打ち切られるので，ランダム打ち切りデータになる．生産の場における重要設備の計画保全の計画でも，ランダム打ち切りデータとしての解析が必要となる．設備の部位別に故障モードを明らかにして，点検や事前取替間隔の最適化を進めるには，設備の故障データを部位別にスクリーニングして解析することが必要であることによる．このようなランダム打ち切りデータの解析においても，累積ハザード関数に着日すればワイブル分布を仮定した解析は容易にできる．

## (1) ワイブル分布

ワイブル分布の特徴とワイブル分布が信頼性データ解析で使われる背景について、説明する。

##### 1）ワイブル分布の特徴

① 3つのパラメータとそれらの意味

ワイブル分布は, 以下の3つのパラメータ,

· 位置パラメータ ; γ (≥0)

• 形状パラメータ :  $ m (>0) $

• 尺度パラメータ ; η(>0)

によって表すことができる. ここで, γとηはデータと同一の次元を持ち, mは無次元のパラメータである. それぞれのパラメータの意味を以下に述べる.

##### (a) 位置パラメータγ

位置パラメータγは，図9.2.1に示すように故障の発生する可能性がある最小時間を意味している．すなわち，γより以前に故障が発生する可能性はなく，γ以降のみに発生する．したがって，故障が発生する時間と発生しない時間の境界となる壁が存在する位置(閾値)を示すので，位置パラメータと呼ばれている．

##### (b) 形状パラメータ m

形状パラメータ  $ m $ は，形状という名が示すように，形状に関連する情報を

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_3/imgs/img_in_image_box_152_1179_857_1450.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A27Z%2F-1%2F%2F28d861d2554c873127d0abccb638e5f1c9da60ee7624d0c2660f2bdf8fecc2e9" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.1 位置パラメータγの意味</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_4/imgs/img_in_chart_box_74_202_333_551.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2Fac2b0c9f178bae5ac0d827b7dc345bc3846e1f9ca379d9a0291c87fa3339d519" alt="Image" width="21%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 信頼度</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_4/imgs/img_in_chart_box_341_190_594_545.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2F4f16aa681344df91be2fd936b83a170ce002231f12da3dfdbf2d3975e55555aa" alt="Image" width="21%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 密度関数</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6cb255a0-1d1b-491c-8783-8be714e81fbf/markdown_4/imgs/img_in_chart_box_604_195_858_548.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2F5b15dd440148a0ef0d33f7fd4c36d8afae407e4dc93c8a4e8390f1162612d5aa" alt="Image" width="21%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(c) 故障率</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図 9.2.2 ワイブル分布の信頼度, 密度関数, 故障率のグラフ ( $ \gamma=0 $,  $ \eta=1 $)</div> </div>


有しているパラメータである．γとηについては，それぞれ，γ=0，η=1と固定して，mの値を1/2，1，2，4と変化させると，信頼度，密度関数，故障率のグラフは図9.2.2に示しているようになる．

図9.2.2の故障率のグラフより，mの値によってグラフの形状が異なることは容易に理解できる．mの値が1/2の時には減少，1の時には一定，2と4の時には増加関数になっている．また，密度関数が $ m \leq 1 $の時には単峰型にはならないで単調に減少していること，故障率が $ m > 1 $では時間の増加関数になることはワイブル分布の重要な性質である．

なお, $m$ の値と故障率 $\lambda(t)$ の定量的な関係については, 後述の(9.2.4)式を参照するとよい.

(c) 尺度パラメータη

詳しくは後述するが, ワイブル分布の MTTF( $ \mu $で示す)と分散( $ \sigma^{2} $で示す)は,  $ \gamma = 0 $とすると,

 $$ \begin{aligned}&\bullet\mu(MTTF)\quad\propto\quad\eta\\&\bullet\sigma^{2}( 分散 )\quad\propto\quad\eta^{2}\end{aligned} $$ 

の関係が成立する．原点から母集団の中心までの距離である平均μがηに比例し．平均からの偏差の平方和の期待値である分散σ²がη²に比例することか

ら，ηは原点からの時間的距離を伸ばしたり縮めたりする機能がある．このことから，ηは尺度パラメータと呼ばれている．

ここで重要なことは, ηの値を大きくして平均である MTTF を改善すれば, 分散(故障までの時間のばらつき)も大きくなるということである. ワイブル分布では, ηが MTTF と分散に共通に含まれているパラメータであることから, これらは関連性があり独立に変えることはできない. ηが大きくなれば, MTTF とともに分散も大きくなる. この点で, 正規分布の平均と分散が互いに独立なパラメータであることと異なっている.

##### ② パラメータと信頼性特性値の関係

ワイブル分布の不信頼度，信頼度，故障率などの信頼性特性値は，3つのパラメータγ，m，ηの値から以下のように求められる．なお，故障率から信頼度は(5.1.7)式を用いることにより，また不信頼度は確率の余事象の法則より，不信頼度＝1－信頼度より求めることができる．

(a) 不信頼度関数： $ F(t) $

 $$ F(t)=\left\{\begin{array}{c c}0&,\ (0\leq t<\gamma)\\ 1-\exp\left[-\left(\frac{t-\gamma}{\eta}\right)^{m}\right],(\gamma\leq t)\end{array}\right. $$ 

(b) 信頼度関数： $ R(t) $

 $$ R\left(t\right)=\left\{\begin{array}{l l}1&,\left(0\leq t<\gamma\right)\\ \exp\left[-\left(\frac{t-\gamma}{\eta}\right)^{m}\right],&\left(\gamma\leq t\right)\end{array}\right. $$ 

(c) 密度関数： $ f(t) $

 $$ f(t)=\left\{\begin{array}{ll}0&,(0<t<\gamma)\\\frac{m}{\eta}\left(\frac{t-\gamma}{\eta}\right)^{m-1}\exp\left[-\left(\frac{t-\gamma}{\eta}\right)^{m}\right],(\gamma\leq t)\end{array}\right. $$ 

(d) 故障率関数： $ \lambda(t) $

 $$ \lambda\left(t\right)=\left\{\begin{array}{c c}0&,\left(0\leq t<\gamma\right)\\ \frac{m}{\eta}\left(\frac{t-\gamma}{\eta}\right)^{m-1},&\left(\gamma\leq t\right)\end{array}\right. $$ 

(e) MTTF :  $ \mu $

 $$ \begin{aligned}\mu&=E(T)=\int_{0}^{\infty}t f(t)dt=\eta\Gamma\left(\frac{1}{m}+1\right)+\gamma\\& ここで ,\Gamma\left(z\right)=\int_{0}^{\infty}t^{z-1}e^{-t}dt\  でガンマ関数 \end{aligned} $$ 

(f) 分散： $ \sigma^{2} $

 $$ \begin{aligned}\sigma^{2}=Var(T)&=\int_{0}^{\infty}(t-\mu)^{2}f(t)dt\\&=\eta^{2}\Big[\Gamma\Big(\frac{2}{m}+1\Big)-\Gamma^{2}\Big(\frac{1}{m}+1\Big)\Big]\end{aligned} $$ 

(g) B_{10} ライフ

 $$ \begin{aligned}B_{10} ライフ &=\gamma+(-\ln0.9)^{\frac{1}{m}}\eta\\&=\gamma+(0.105)^{\frac{1}{m}}\eta\end{aligned} $$ 

これらの中で，故障率λ(t)とパラメータの関係が最も重要である．γ=0とすると故障率は時間tのベキ乗に比例していることがわかる．時間により変化する関数の中で最も簡単に表現できる場合になる．しかも，形状パラメータmの値を変えることにより，3つの故障パターンすべてに対応できる柔軟性を有している．「簡略すぎない簡易な故障モデル」ということができる．

##### 2）ワイブル分布の特徴

ワイブル分布が信頼性データ解析でよく用いられる背景として，次の3つの

項目をあげることができる.

##### ① 故障バターンへの対応の自動化

3つの故障パターンの情報が、表 9.2.1 に示すように、形状パラメータ m の

<div style="text-align: center;"><div style="text-align: center;">表 9.2.1 m の値と故障のパターンの関係</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>m 的值</td><td style='text-align: center; word-wrap: break-word;'>故障のメター</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>0 ≤ m ≤ 1</td><td style='text-align: center; word-wrap: break-word;'>DFR 型(初期故障型)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>m = 1</td><td style='text-align: center; word-wrap: break-word;'>CFR 型(偶然故障型)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>1 ≤ m</td><td style='text-align: center; word-wrap: break-word;'>CFR 型(摩托故障型)</td></tr></table>

値へ自動的に反映される。すなわち、データ解析に当たって故障パターンのとれかを仮定する必要がなく、故障パターンの識別は解析後の $m$ の値によって判断すればよい。ちなみに、正規分布は IFR の寿命分布であり、DFR と CFR の故障パターンに従うデータの解析に用いることはできない。

##### ② 故障モデルの裏付け

故障モデルの一つである最弱リンクモデルを適用して，ある条件の下で寿命分布がワイプル分布になることを導くことができる．最弱リンクモデルは，図9.2.3に示すように，故障までの時間や許容限界応力などある特性 $ X_{1}, X_{2}, \cdots, X_{n} $の最小値．

 $$ X=\min\left(X_{1},\quad X_{2},\quad\cdots,\quad X_{n}\right) $$ 

が故障を支配し観測できるという考え方である．故障の発生は，第6章で説明している直列システムのように，製品やシステムの最弱部位が原因となって生

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//098487d7-e9ec-4af2-8d8b-5230de6155eb/markdown_2/imgs/img_in_image_box_106_1107_855_1441.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2F2f07b5c80cc1a4f529e3aa54837f584caa3d18b0a2f6e31d9534772c1474af5a" alt="Image" width="62%" /></div>


<div style="text-align: center;"><div style="text-align: center;">四0.2.3 最弱リンクモデル</div> </div>


じることが多い. このような状況で観測される信頼性データは, 最弱リンクモデルの仮定を満たしているので, ワイブル分布に従うことを仮定して解析できる.

##### 【最弱リンクモデルよりワイブル分布が導かれる説明】

分布関数が  $ F(x) $ である n 個の互いに独立な確率変数の最小値の分布関数は，

 $$ L_{n}(x)=P[W_{n}=\min(X_{1},\ \cdots,\ X_{n})\leq x]=1-[1-F(x)]^{n} $$ 

となる. この関数について $n\rightarrow\infty$ とした時の漸近分布を求めると.

 $$ \lim_{n\to\infty}\left\{1-\left[1-F(x)\right]^{n}\right\}=\left\{\begin{array}{l}0,\ F(x)=0 の時 \\ 1,\ F(x)\leq1 の時 \end{array}\right. $$ 

と退化する. この退化を回避するために線形変換.

 $$ Y=c_{n}+d_{n}x $$ 

を行う．ここで  $ c_{n} $ と  $ d_{n} $ は非退化の極限分布が，

 $$ \begin{aligned}\lim_{n\to\infty}L_{n}(c_{n}+d_{n}x)&=\lim_{n\to\infty}P[W_{n}=\min(X_{1},\ \cdots,\ X_{n})\leq c_{n}+d_{n}x]\\&=\lim_{n\to\infty}\{1-[1-F(c_{n}+d_{n}x)]^{n}\}=L\left(x\right)\end{aligned} $$ 

となるように定める定数で、これはnに依存する。

説明を簡単にするために確率変数がγ以上の値をとるとすれば， $ F(x) $が

 $$ \lim_{n\to\infty}\frac{F(\gamma-1/tx)}{F(\gamma-1/t)}=x^{-m},m>0 $$ 

を満たす時，かつその時に限り，

 $$ L\left(x\right)=\left\{\begin{array}{l l}1-\exp\left(-x^{m}\right),&x\geq0 の時 \\ 0&,x<0 の時 \end{array}\right. $$ 

となる．すなわち．形状母数ｍのワイブル分布になる．

ここで  $ c_n $ と  $ d_n $ は、それぞれ。

 $$ c_{n}=\gamma,\ d_{n}=F^{-1}(1/n)-\gamma $$ 

である．これらの条件を満たしていれば．最小値の分布はワイブル分布に従うと考えてよい．

なお．(9.2.8)式を満たさない場合の詳細についてはCastillo $ ^{[2]} $を参照すると

よい

##### ③ 信頼性データ解析における実用性

位置パラメータγを正にすれば，使用開始後一定時間内には故障が生じない状況に対応できる．形状パラメータmの値を変えることにより，3つの故障パターンに対応可能である．3つのパラメータを的確に設定することにより，故障が発生するさまざまな状況へ柔軟に対処できる．また，これらのパラメータは以下に述べるワイプル型確率紙により容易に求められる，という実用的な価値を有している．

##### (2) ワイブル型確率紙による解析

##### 1）ワイブル型確率紙の構成

位置パラメータγについてγ=0とすると，ワイブル分布の不信頼度関数は，(9.2.9)式，

 $$ F(t)=1-\exp\left\{-\left(\frac{t}{\eta}\right)^{m}\right\}\ ,(0\leq t) $$ 

で与えられる．これをパラメータ $m$ と $\eta$ の推定に都合の良い表現に変形するため．形状パラメータ $m$ について線形となる表現に変換すると．

 $$ \ln\ln\frac{1}{1-F(t)}=m\ln t-m\ln\eta=m\left(\ln t-\ln\eta\right) $$ 

となる。ここで、さらに、

 $$ \begin{aligned}&X=\ln t\\&Y=\ln\ln\frac{1}{1-F(t)}\\ \end{aligned} $$ 

とおくと。

 $$ Y=mX-m\ln\eta $$ 

となり．YとXは線形の関係になる．また．形状パラメータmは直線の値さであり．尺度パラメータηはY=0となる時間tの値と等しくなる．

以上のことを考慮して, 次のようにワイブル型確率紙を構成することができる.

##### (a) 4つの軸の構成

上側の横軸を lnt 軸として，下側の横軸には対応する t の値を目盛る．また右側の縦軸は  $ \ln \ln \frac{1}{1-F(t)} $ 軸である．左側の縦軸には右側の縦軸に対応する  $ F(t) $ の値をパーセント単位で目盛っている．このように 4 つの軸を考慮すれば，(9.2.9)式で表されるワイブル分布の不信頼度関数  $ F(t) $ は，図 9.2.4 に示すように，直線として図示できる．

##### (b) パラメータの推定

形状パラメータ $m$ は, 直線の傾きを右側の縦軸から読み取って求めることができる.

尺度パラメータηは,

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6f709ffc-f3b8-4602-920e-beb560fba997/markdown_0/imgs/img_in_chart_box_49_842_897_1424.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A24Z%2F-1%2F%2F4f1d3cc1297269920cd3c90196ee2129de7048a4b4609277a9bfe0ed9698902d" alt="Image" width="71%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.4 ワイブル型確率紙の構成原理</div> </div>


 $$ Y=\ln\ln\frac{1}{1-F(t)}=0 $$ 

を満たす t の値として,

 $$ 0=m\left(\ln t-\ln\eta\right)\quad\Leftrightarrow\quad t=\eta $$ 

と，t軸から求めることができる.

2）ワイブル型確率紙の使い方

①  $ \gamma=0 $ の時

ワイブル型確率紙の構成原理より，その使い方を手順化すると以下のようになる。

◼手順1：観測されているn個の寿命データを小さいものから順番に並べる。これを。

 $$ t_{(1)}<t_{(2)}<\cdots<t_{(i)}<\cdots<t_{(n)} $$ 

とする。

■手順2：i番目の故障データ  $ t_{(i)} $ に対応する累積頻度  $ F(t_{(i)}) $ を平均またはメジアンランク法で求める.

(a) 平均ランク法

 $ F(t_{(i)}) $ 在，

 $$ \frac{i}{n+1}\times100(\%) $$ 

として求める。

(b) メジアンランク法

表 9.2.2 のメジアンランク表, または近似式,

 $$ \frac{1-0.3}{n+0.4}\times100\left(\%\right) $$ 

により  $ F(t_{(i)}) $ を求める.

<div style="text-align: center;"><div style="text-align: center;">表 9.2.2 メジアンランク表：メジアンランクと両側信頼限界(信頼率 1−a=80%)</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>12</td><td style='text-align: center; word-wrap: break-word;'>13</td><td style='text-align: center; word-wrap: break-word;'>14</td><td style='text-align: center; word-wrap: break-word;'>15</td></tr><tr><td rowspan="2">1</td><td style='text-align: center; word-wrap: break-word;'>2.1 (12.9)</td><td style='text-align: center; word-wrap: break-word;'>1.7 (10.9)</td><td style='text-align: center; word-wrap: break-word;'>1.5 (9.4)</td><td style='text-align: center; word-wrap: break-word;'>1.3 (8.3)</td><td style='text-align: center; word-wrap: break-word;'>1.2 (7.4)</td><td style='text-align: center; word-wrap: break-word;'>1.0 (6.7)</td><td style='text-align: center; word-wrap: break-word;'>1.0 (6.1)</td><td style='text-align: center; word-wrap: break-word;'>0.9 (5.6)</td><td style='text-align: center; word-wrap: break-word;'>0.8 (5.2)</td><td style='text-align: center; word-wrap: break-word;'>0.7 (4.8)</td><td style='text-align: center; word-wrap: break-word;'>0.7 (4.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>36.9</td><td style='text-align: center; word-wrap: break-word;'>31.9</td><td style='text-align: center; word-wrap: break-word;'>28.0</td><td style='text-align: center; word-wrap: break-word;'>25.0</td><td style='text-align: center; word-wrap: break-word;'>22.6</td><td style='text-align: center; word-wrap: break-word;'>20.6</td><td style='text-align: center; word-wrap: break-word;'>18.9</td><td style='text-align: center; word-wrap: break-word;'>17.5</td><td style='text-align: center; word-wrap: break-word;'>16.2</td><td style='text-align: center; word-wrap: break-word;'>15.2</td><td style='text-align: center; word-wrap: break-word;'>14.2</td></tr><tr><td rowspan="2">2</td><td style='text-align: center; word-wrap: break-word;'>11.2 (31.4)</td><td style='text-align: center; word-wrap: break-word;'>9.3 (26.4)</td><td style='text-align: center; word-wrap: break-word;'>7.9 (22.8)</td><td style='text-align: center; word-wrap: break-word;'>6.9 (20.1)</td><td style='text-align: center; word-wrap: break-word;'>6.1 (18.0)</td><td style='text-align: center; word-wrap: break-word;'>5.5 (16.2)</td><td style='text-align: center; word-wrap: break-word;'>4.9 (14.8)</td><td style='text-align: center; word-wrap: break-word;'>4.5 (13.6)</td><td style='text-align: center; word-wrap: break-word;'>4.2 (12.6)</td><td style='text-align: center; word-wrap: break-word;'>3.9 (11.7)</td><td style='text-align: center; word-wrap: break-word;'>3.6 (10.9)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>58.4</td><td style='text-align: center; word-wrap: break-word;'>51.0</td><td style='text-align: center; word-wrap: break-word;'>45.3</td><td style='text-align: center; word-wrap: break-word;'>40.6</td><td style='text-align: center; word-wrap: break-word;'>36.8</td><td style='text-align: center; word-wrap: break-word;'>33.7</td><td style='text-align: center; word-wrap: break-word;'>31.0</td><td style='text-align: center; word-wrap: break-word;'>28.7</td><td style='text-align: center; word-wrap: break-word;'>26.8</td><td style='text-align: center; word-wrap: break-word;'>25.1</td><td style='text-align: center; word-wrap: break-word;'>23.6</td></tr><tr><td rowspan="2">3</td><td style='text-align: center; word-wrap: break-word;'>24.7 (50.0)</td><td style='text-align: center; word-wrap: break-word;'>20.1 (42.1)</td><td style='text-align: center; word-wrap: break-word;'>17.0 (36.4)</td><td style='text-align: center; word-wrap: break-word;'>14.7 (32.1)</td><td style='text-align: center; word-wrap: break-word;'>12.9 (28.6)</td><td style='text-align: center; word-wrap: break-word;'>11.6 (25.9)</td><td style='text-align: center; word-wrap: break-word;'>10.5 (23.6)</td><td style='text-align: center; word-wrap: break-word;'>9.6 (21.7)</td><td style='text-align: center; word-wrap: break-word;'>8.8 (20.0)</td><td style='text-align: center; word-wrap: break-word;'>8.1 (18.6)</td><td style='text-align: center; word-wrap: break-word;'>7.6 (17.4)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>75.3</td><td style='text-align: center; word-wrap: break-word;'>66.7</td><td style='text-align: center; word-wrap: break-word;'>59.6</td><td style='text-align: center; word-wrap: break-word;'>53.8</td><td style='text-align: center; word-wrap: break-word;'>49.0</td><td style='text-align: center; word-wrap: break-word;'>45.0</td><td style='text-align: center; word-wrap: break-word;'>41.5</td><td style='text-align: center; word-wrap: break-word;'>38.6</td><td style='text-align: center; word-wrap: break-word;'>36.0</td><td style='text-align: center; word-wrap: break-word;'>33.7</td><td style='text-align: center; word-wrap: break-word;'>31.7</td></tr><tr><td rowspan="2">4</td><td style='text-align: center; word-wrap: break-word;'>41.6 (68.6)</td><td style='text-align: center; word-wrap: break-word;'>33.3 (57.9)</td><td style='text-align: center; word-wrap: break-word;'>27.9 (50.0)</td><td style='text-align: center; word-wrap: break-word;'>24.0 (44.0)</td><td style='text-align: center; word-wrap: break-word;'>21.0 (39.3)</td><td style='text-align: center; word-wrap: break-word;'>18.8 (35.5)</td><td style='text-align: center; word-wrap: break-word;'>16.9 (32.4)</td><td style='text-align: center; word-wrap: break-word;'>15.4 (29.8)</td><td style='text-align: center; word-wrap: break-word;'>14.2 (27.5)</td><td style='text-align: center; word-wrap: break-word;'>13.1 (25.6)</td><td style='text-align: center; word-wrap: break-word;'>12.2 (23.9)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>88.8</td><td style='text-align: center; word-wrap: break-word;'>79.9</td><td style='text-align: center; word-wrap: break-word;'>72.1</td><td style='text-align: center; word-wrap: break-word;'>65.5</td><td style='text-align: center; word-wrap: break-word;'>59.9</td><td style='text-align: center; word-wrap: break-word;'>55.2</td><td style='text-align: center; word-wrap: break-word;'>51.1</td><td style='text-align: center; word-wrap: break-word;'>47.5</td><td style='text-align: center; word-wrap: break-word;'>44.4</td><td style='text-align: center; word-wrap: break-word;'>41.7</td><td style='text-align: center; word-wrap: break-word;'>39.3</td></tr><tr><td rowspan="2">5</td><td style='text-align: center; word-wrap: break-word;'>63.1 (87.1)</td><td style='text-align: center; word-wrap: break-word;'>49.0 (73.6)</td><td style='text-align: center; word-wrap: break-word;'>40.4 (63.6)</td><td style='text-align: center; word-wrap: break-word;'>34.5 (56.0)</td><td style='text-align: center; word-wrap: break-word;'>30.1 (50.0)</td><td style='text-align: center; word-wrap: break-word;'>26.7 (45.2)</td><td style='text-align: center; word-wrap: break-word;'>24.1 (41.2)</td><td style='text-align: center; word-wrap: break-word;'>21.9 (37.9)</td><td style='text-align: center; word-wrap: break-word;'>20.1 (35.0)</td><td style='text-align: center; word-wrap: break-word;'>18.5 (32.6)</td><td style='text-align: center; word-wrap: break-word;'>17.2 (30.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>97.9</td><td style='text-align: center; word-wrap: break-word;'>90.7</td><td style='text-align: center; word-wrap: break-word;'>83.0</td><td style='text-align: center; word-wrap: break-word;'>76.0</td><td style='text-align: center; word-wrap: break-word;'>69.9</td><td style='text-align: center; word-wrap: break-word;'>64.6</td><td style='text-align: center; word-wrap: break-word;'>59.9</td><td style='text-align: center; word-wrap: break-word;'>55.9</td><td style='text-align: center; word-wrap: break-word;'>52.3</td><td style='text-align: center; word-wrap: break-word;'>49.2</td><td style='text-align: center; word-wrap: break-word;'>46.4</td></tr><tr><td rowspan="2">6</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>68.1 (89.1)</td><td style='text-align: center; word-wrap: break-word;'>54.7 (77.2)</td><td style='text-align: center; word-wrap: break-word;'>46.2 (67.9)</td><td style='text-align: center; word-wrap: break-word;'>40.1 (60.7)</td><td style='text-align: center; word-wrap: break-word;'>35.4 (54.8)</td><td style='text-align: center; word-wrap: break-word;'>31.8 (50.0)</td><td style='text-align: center; word-wrap: break-word;'>28.8 (46.0)</td><td style='text-align: center; word-wrap: break-word;'>26.4 (42.5)</td><td style='text-align: center; word-wrap: break-word;'>24.3 (39.5)</td><td style='text-align: center; word-wrap: break-word;'>22.6 (37.0)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>98.3</td><td style='text-align: center; word-wrap: break-word;'>92.1</td><td style='text-align: center; word-wrap: break-word;'>85.3</td><td style='text-align: center; word-wrap: break-word;'>79.0</td><td style='text-align: center; word-wrap: break-word;'>73.3</td><td style='text-align: center; word-wrap: break-word;'>68.2</td><td style='text-align: center; word-wrap: break-word;'>63.8</td><td style='text-align: center; word-wrap: break-word;'>59.8</td><td style='text-align: center; word-wrap: break-word;'>56.3</td><td style='text-align: center; word-wrap: break-word;'>53.2</td></tr><tr><td rowspan="2">7</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>72.0 (90.6)</td><td style='text-align: center; word-wrap: break-word;'>59.4 (79.9)</td><td style='text-align: center; word-wrap: break-word;'>51.0 (71.4)</td><td style='text-align: center; word-wrap: break-word;'>44.8 (64.5)</td><td style='text-align: center; word-wrap: break-word;'>40.1 (58.8)</td><td style='text-align: center; word-wrap: break-word;'>36.2 (54.0)</td><td style='text-align: center; word-wrap: break-word;'>33.1 (50.0)</td><td style='text-align: center; word-wrap: break-word;'>30.5 (46.5)</td><td style='text-align: center; word-wrap: break-word;'>28.2 (43.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>98.5</td><td style='text-align: center; word-wrap: break-word;'>93.1</td><td style='text-align: center; word-wrap: break-word;'>87.1</td><td style='text-align: center; word-wrap: break-word;'>81.2</td><td style='text-align: center; word-wrap: break-word;'>75.9</td><td style='text-align: center; word-wrap: break-word;'>71.2</td><td style='text-align: center; word-wrap: break-word;'>66.9</td><td style='text-align: center; word-wrap: break-word;'>63.1</td><td style='text-align: center; word-wrap: break-word;'>59.6</td></tr><tr><td rowspan="2">8</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>75.0 (91.7)</td><td style='text-align: center; word-wrap: break-word;'>63.2 (82.0)</td><td style='text-align: center; word-wrap: break-word;'>55.0 (74.1)</td><td style='text-align: center; word-wrap: break-word;'>48.9 (67.6)</td><td style='text-align: center; word-wrap: break-word;'>44.1 (62.1)</td><td style='text-align: center; word-wrap: break-word;'>40.2 (57.5)</td><td style='text-align: center; word-wrap: break-word;'>36.9 (53.5)</td><td style='text-align: center; word-wrap: break-word;'>34.2 (50.0)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>98.7</td><td style='text-align: center; word-wrap: break-word;'>93.9</td><td style='text-align: center; word-wrap: break-word;'>88.4</td><td style='text-align: center; word-wrap: break-word;'>83.1</td><td style='text-align: center; word-wrap: break-word;'>78.1</td><td style='text-align: center; word-wrap: break-word;'>73.6</td><td style='text-align: center; word-wrap: break-word;'>69.5</td><td style='text-align: center; word-wrap: break-word;'>65.8</td></tr><tr><td rowspan="2">9</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>77.4 (92.6)</td><td style='text-align: center; word-wrap: break-word;'>66.3 (83.8)</td><td style='text-align: center; word-wrap: break-word;'>58.5 (76.4)</td><td style='text-align: center; word-wrap: break-word;'>52.5 (70.2)</td><td style='text-align: center; word-wrap: break-word;'>47.7 (65.0)</td><td style='text-align: center; word-wrap: break-word;'>43.7 (60.5)</td><td style='text-align: center; word-wrap: break-word;'>40.4 (56.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>98.8</td><td style='text-align: center; word-wrap: break-word;'>94.5</td><td style='text-align: center; word-wrap: break-word;'>89.5</td><td style='text-align: center; word-wrap: break-word;'>84.6</td><td style='text-align: center; word-wrap: break-word;'>79.9</td><td style='text-align: center; word-wrap: break-word;'>75.7</td><td style='text-align: center; word-wrap: break-word;'>71.8</td></tr><tr><td rowspan="2">10</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>79.4 (93.3)</td><td style='text-align: center; word-wrap: break-word;'>69.0 (85.2)</td><td style='text-align: center; word-wrap: break-word;'>61.4 (78.3)</td><td style='text-align: center; word-wrap: break-word;'>55.6 (72.5)</td><td style='text-align: center; word-wrap: break-word;'>50.8 (67.4)</td><td style='text-align: center; word-wrap: break-word;'>46.8 (63.0)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.0</td><td style='text-align: center; word-wrap: break-word;'>95.1</td><td style='text-align: center; word-wrap: break-word;'>90.4</td><td style='text-align: center; word-wrap: break-word;'>85.8</td><td style='text-align: center; word-wrap: break-word;'>81.5</td><td style='text-align: center; word-wrap: break-word;'>77.4</td></tr><tr><td rowspan="2">11</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>81.1 (93.9)</td><td style='text-align: center; word-wrap: break-word;'>71.3 (86.4)</td><td style='text-align: center; word-wrap: break-word;'>64.0 (80.0)</td><td style='text-align: center; word-wrap: break-word;'>58.3 (74.4)</td><td style='text-align: center; word-wrap: break-word;'>53.6 (69.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.0</td><td style='text-align: center; word-wrap: break-word;'>95.5</td><td style='text-align: center; word-wrap: break-word;'>91.2</td><td style='text-align: center; word-wrap: break-word;'>86.9</td><td style='text-align: center; word-wrap: break-word;'>82.8</td></tr><tr><td rowspan="2">12</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>82.5 (94.4)</td><td style='text-align: center; word-wrap: break-word;'>73.2 (87.4)</td><td style='text-align: center; word-wrap: break-word;'>66.3 (81.4)</td><td style='text-align: center; word-wrap: break-word;'>60.9 (76.1)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.1</td><td style='text-align: center; word-wrap: break-word;'>95.8</td><td style='text-align: center; word-wrap: break-word;'>91.9</td><td style='text-align: center; word-wrap: break-word;'>87.8</td></tr><tr><td rowspan="2">13</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>83.8 (94.8)</td><td style='text-align: center; word-wrap: break-word;'>74.9 (88.3)</td><td style='text-align: center; word-wrap: break-word;'>68.3 (82.6)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.2</td><td style='text-align: center; word-wrap: break-word;'>96.1</td><td style='text-align: center; word-wrap: break-word;'>92.4</td></tr><tr><td rowspan="2">14</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>84.8 (95.2)</td><td style='text-align: center; word-wrap: break-word;'>76.4 (89.1)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.3</td><td style='text-align: center; word-wrap: break-word;'>96.4</td></tr><tr><td rowspan="2">15</td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>85.8 (95.5)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'></td><td style='text-align: center; word-wrap: break-word;'>99.3</td></tr></table>

上段：Li(90% ランク)，中段( )がついている(メジアンランク)：中央値，下段：Ui(10% ランク)（出典） 真権 肇編(2010)：『新版 信頼性工学入門』，p. 260，日本規格協会.

☑手順3：得られた寿命データを $t$ 軸と $F(t)$ 軸と用いて確率紙へ打点する.

横轴 $ (t) $

 $$ \begin{array}{cccc} \Leftrightarrow & \begin{array}{lllllll}t_{(1)}&<&t_{(2)}&<\cdots<&t_{(i)}&<\cdots<&t_{(n)}\end{array} \\ & \uparrow\downarrow& \uparrow\downarrow& \uparrow\downarrow& \uparrow\downarrow& \uparrow\downarrow \end{array} $$ 

縦軸 $ (F(t)) $  $ \Leftrightarrow $  $ F(t_{(1)})<F(t_{(2)})<\cdots<F(t_{(i)})<\cdots<F(t_{(n)}) $

☑手順4：打点したn個の点が直線上に並んでいるか目視により判断して，適切な直線を当てはめる.

「適切な直線を当てはめる」という意味は，

・下側の横軸(t軸)は対数目盛であり，故障順いが低いほど横軸方向の変動が強調されて図示されること

• 左側の縦軸(F(t)軸)については, 5% から 95% の部分での当てはめが重要であること

に留意して直線を引くということである。

▣手順5：直線の傾きより $m$ を求める．そのため，確率紙の「$m$ の推定点」を通り，あてはめた直線へ平行な直線を引く．これが $\ln t=0$ と交わる $\ln \ln \frac{1}{1-F(t)}$ 軸の目盛りを読む．この値の絶対値が $m$ の推定値になる．

▣手順6：当てはめた直線と$\ln\ln\frac{1}{1-F(t)}=0$ の交点を下方にたどって，対応する$t$ 軸の目盛りを読むと，これが$\eta$ の推定値$\hat{\eta}$ になる.

▪手順7：MTTFは，mの値に対応するμ/η尺の目盛り$\widehat{\mu/\eta}$を読み，この値に手順6で求めたηの値$\hat{\eta}$を乗ずることで，

 $$ \mathrm{MTTF}=\hat{\mu}=\hat{\eta}\times(\widehat{\mu/\eta}) $$ 

と求められる。

■手順8： $ t_0 $における信頼度 $ R(t_0) $は， $ t_0 $に対応する不信頼度 $ F(t_0) $を確率紙の $ F(t) $軸より $ F(t_0) $と求めて，これより，

 $$ \widehat{R(t_{0})}=1-\widehat{F(t_{0})} $$ 

と求めることができる。

以上の手順を図解すると，図9.2.5のようになる。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//6f709ffc-f3b8-4602-920e-beb560fba997/markdown_4/imgs/img_in_chart_box_68_201_754_706.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A28Z%2F-1%2F%2Faadcf44e94900c514809da1439c5bb4328152fd698b29b669eb1f5b45519265b" alt="Image" width="57%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.5 ワイブル型確率紙へのデータの打点とパラメータの推定</div> </div>


手順1と2は，データを確率紙に打点するための準備である．データに対応する$F(t)$の値は，平均とメジアンランク法の2つがよく用いられる．データの数$n$が多ければ2つの方法の差異はほとんどない．$n\leq20$の時には，理論的に，メジアンランク法が望ましいといわれている．

##### [平均ランク法とメジアンランク法の説明]

$n$ 個の寿命データの故障順位 $i$ のデータ $t_{(i)}$ に対応する $F(t_{(i)})$ を，平均ランクあるいはメジアンランクに代替して求める考え方について，以下で簡潔に説明する.

データ $t$ に対応する $F(t)$ については, パラメータ $m$, $\eta$ が未知であるので, 求めることはできない. そこで, 確率変数 $T$ が分布関数 $F(t)$ に従っているならば, 確率変数 $F(T)$ の分布関数は,

 $$ P[F(T)\leq x]=P[T\leq F^{1}(x)]=F[F^{-1}(x)]=x $$ 

となる. したがって, $F(T)$ は [0, 1] の一様分布に従うことになり, 分布関

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0873faf3-6bcf-464f-ade9-6b6c69dca9e3/markdown_0/imgs/img_in_image_box_103_200_873_791.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A25Z%2F-1%2F%2F6f99c156f6e4704e0cdcce60a827514eb176aef4f59b363b9ba7059a8d4e3a1f" alt="Image" width="64%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.6 平均ランク法とメジアンランク法の図解による説明</div> </div>


数 $F(x)$ のパラメータには依存しない. この性質から, 故障順位 $i$ のデータ $t_{(i)}$ に対応する $F(t_{(i)})$ は, 一様分布に従う確率変数の順序統計量になるので, その密度関数はベータ分布,

 $$ g(x_{(i)})=\frac{n!}{(i-1)!(n-i)!}x_{(i)}^{i-1}(1-x_{(i)})^{n-i},\ 0\leq x_{(i)}\leq1 $$ 

となる．ここで． $ x_{(i)}=F(t_{(i)}) $である．

故障順位 $i$ のデータ $t_{(i)}$ に対応する $F(t_{(i)})$ を，図 9.2.6 に示しているように，(9.2.13)式で与えられる分布の中心値によって代替する．中心値を平均あるいはメジアンで代表させる考え方が，それぞれ，平均ランク法でありメジアンランク法である．

##### 【例题 9.2.1】 完全データのワイブル解析の例题

表 9.2.3 のデータは，機械部品の寿命データである．ワイブル型確率紙を用

<div style="text-align: center;"><div style="text-align: center;">表 9.2.3 機械部品の寿命データ</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>试料No.</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>12</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>寿命值</td><td style='text-align: center; word-wrap: break-word;'>0.6</td><td style='text-align: center; word-wrap: break-word;'>1.9</td><td style='text-align: center; word-wrap: break-word;'>6.4</td><td style='text-align: center; word-wrap: break-word;'>1.0</td><td style='text-align: center; word-wrap: break-word;'>2.7</td><td style='text-align: center; word-wrap: break-word;'>1.6</td><td style='text-align: center; word-wrap: break-word;'>4.5</td><td style='text-align: center; word-wrap: break-word;'>6.6</td><td style='text-align: center; word-wrap: break-word;'>2.8</td><td style='text-align: center; word-wrap: break-word;'>5.0</td><td style='text-align: center; word-wrap: break-word;'>1.3</td><td style='text-align: center; word-wrap: break-word;'>2.2</td></tr></table>

(单位  $ 10^{3} $ 時間)

<div style="text-align: center;"><div style="text-align: center;">表 9.2.4 寿命値の累積頻度(メジアンランク)</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>故障顺位</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>12</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>寿命值</td><td style='text-align: center; word-wrap: break-word;'>0.6</td><td style='text-align: center; word-wrap: break-word;'>1.0</td><td style='text-align: center; word-wrap: break-word;'>1.3</td><td style='text-align: center; word-wrap: break-word;'>1.6</td><td style='text-align: center; word-wrap: break-word;'>1.9</td><td style='text-align: center; word-wrap: break-word;'>2.2</td><td style='text-align: center; word-wrap: break-word;'>2.7</td><td style='text-align: center; word-wrap: break-word;'>2.8</td><td style='text-align: center; word-wrap: break-word;'>6.4</td><td style='text-align: center; word-wrap: break-word;'>6.6</td><td style='text-align: center; word-wrap: break-word;'>4.5</td><td style='text-align: center; word-wrap: break-word;'>5.0</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>メジアンランク</td><td style='text-align: center; word-wrap: break-word;'>5.6</td><td style='text-align: center; word-wrap: break-word;'>16.6</td><td style='text-align: center; word-wrap: break-word;'>21.7</td><td style='text-align: center; word-wrap: break-word;'>29.8</td><td style='text-align: center; word-wrap: break-word;'>37.9</td><td style='text-align: center; word-wrap: break-word;'>46.0</td><td style='text-align: center; word-wrap: break-word;'>54.0</td><td style='text-align: center; word-wrap: break-word;'>62.1</td><td style='text-align: center; word-wrap: break-word;'>70.2</td><td style='text-align: center; word-wrap: break-word;'>78.3</td><td style='text-align: center; word-wrap: break-word;'>86.4</td><td style='text-align: center; word-wrap: break-word;'>94.4</td></tr></table>

いて解析し, パラメータ $m$ と $\eta$, MTTF 及 $\mathcal{U}t_{0}=700$ (時間) における信頼度を求めよ.

▣手順1:12個の寿命データを小さい方から順番に並べる.

☑手順2：累積頻度  $ F(t) $ を求める．ここではメジアンランク法により求め，その結果を表9.2.4に示す．

☑手順3：寿命データを確率紙に打点する．その結果を図9.2.7に示す．

☑手順4：図9.2.7よりn個の打点した点は直線上に並んでいると判断できるので，直線を当てはめる.

▣手順5：「mの推定点」を通り当てはめた直線に平行な直線を引き, これが

$\ln t=0$と交わる点の $\ln \ln \frac{1}{1-F(t)}$ 軸の目盛りを読む. その絶対値から$\hat{m}=1.80$となる.

■手順6：$\ln\ln\frac{1}{1-F(t)}=0$ とあてはめた直線との交点を下方にたどって，対応する$t$ 軸の目盛りを読むと，これが$\eta$ の推定値で$\hat{\eta}=2,950$（時間）となる。

▣手順7：MTTFは，μの値に対応するμ/η尺より， $ \left(\frac{\mu}{\eta}\right)=0.890 $ を得るから，

<div style="text-align: center;"><div style="text-align: center;">図9.2.7 ワイブル確率紙によるデータ解析</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0873faf3-6bcf-464f-ade9-6b6c69dca9e3/markdown_2/imgs/img_in_chart_box_107_224_784_1457.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A26Z%2F-1%2F%2F0fb617ff6f17a6bd59c2534d485be222c00156eec749a2f627df24c1c884edf9" alt="Image" width="56%" /></div>


 $$ \widehat{MTTF}=\hat{\eta}\times\left(\frac{\widehat{\mu}}{\eta}\right)=2950\times0.890=2.626( 時間 ) $$ 

となる。

■手順8： $ t_0 = 700 $（時間）における信頼度は， $ t_0 $における直線の $ F(t) $軸の値を読むと $ \overline{F(t_0 = 700)} = 8.2(\%) $であるから，

 $$ \begin{aligned}\widehat{R\left(t_{0}=700\right)}&=1-\widehat{F\left(t_{0}=700\right)}\\&=1-0.082=91.8(\%)\end{aligned} $$ 

となる。

##### ②  $ \gamma \neq 0 $ の時

γ = 0 としてワイブル型確率紙に打点したデータが,

・直線上に並ばない時

• 直線上に並ぶが形状パラメータ m が非常に大きい値(例えば, m が 10 以上)の時

には，γ = 0 の前提条件が満たされていないことが考えられる．以下の手順でγの値を推定して，次にパラメータ m と η を推定する．

##### (a) γの推定

γ ≠ 0 の時に γ = 0 としてデータを打点すると, 図 9.2.8 のように打点したデータが曲線状に並ぶ. このように上に凸の曲線状に並んだ時には, F(t) 軸の値が 0.1% のところまで曲線をさらに外挿して t 軸と交わる値 Ḥ より γ の値を求める.

##### (b)  $ m $と $ \eta $の推定

t 軸の値を  $ t - \hat{\gamma} $ としてデータを再打点し，図 9.2.9 のようにデータが直線上に並べば，直線を当てはめ  $ \gamma = 0 $ の時と同様の方法で，当てはめた直線より  $ m $ と  $ \eta $ を求める.

##### ③ 混合型ワイブル分布の時

パラメータの異なる2つのワイブル分布の母集団が，図9.2.10に示すように，比率pの割合で混合している場合には，混合型ワイブル分布になる，この

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0873faf3-6bcf-464f-ade9-6b6c69dca9e3/markdown_4/imgs/img_in_image_box_868_95_977_306.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A27Z%2F-1%2F%2Ff4bf205e3723e81aed78ad0144a052a3f07cb3d84a5f6b09d7c9d6bce57cb74b" alt="Image" width="9%" /></div>


図9.2.9 再打点して当てはめた直線より $ m $と $ n $を推定する方法

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0873faf3-6bcf-464f-ade9-6b6c69dca9e3/markdown_4/imgs/img_in_chart_box_144_377_764_864.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A27Z%2F-1%2F%2F0b9a60b20c73fe081fe585bfff74183862bbef10a5e15105c94fb666f6052c61" alt="Image" width="52%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.2.8 γ ≠ 0 の時のデータの並び方(曲線状または m が非常に大きい値の時)</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0873faf3-6bcf-464f-ade9-6b6c69dca9e3/markdown_4/imgs/img_in_chart_box_131_980_782_1471.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A27Z%2F-1%2F%2F633620195fb2a12c0d720745f886498e59134689cb665c5670f8a9544f28a293" alt="Image" width="54%" /></div>


 $$ F_{1}\left(t\right)=1-\exp\left[-\left(\frac{t}{\eta_{1}}\right)^{m_{1}}\right]\quad F\left(t\right)=pF_{1}\left(t\right)+\left(1-p\right)F_{2}\left(t\right) $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_0/imgs/img_in_image_box_61_185_837_494.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A47Z%2F-1%2F%2Fb9a71b7f91a7d55e64d007818b1d3f5563c345f24eaf9e9f2df32d2b1ec5ffb5" alt="Image" width="65%" /></div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_0/imgs/img_in_chart_box_610_352_833_464.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A47Z%2F-1%2F%2Fd62e96d1bb76c85c3c36ad7a10a49c3f7d5032a99c6a4a0899702cae4bb78613" alt="Image" width="18%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b)ロット２からの故障データ</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.10 混合型ワイブル分布と故障データ</div> </div>


母集団の分布は、

 $$ \begin{align*}F(t)&=p\Big\{1-\exp\Big[-\Big(\frac{t}{\eta_{1}}\Big)^{m_{1}}\Big]\Big\}+(1-p)\Big\{1-\exp\Big[-\Big(\frac{t}{\eta_{2}}\Big)^{m_{2}}\Big]\Big\},\\&\quad0\leq p\leq1\end{align*} $$ 

で表される。

n 個の故障データをどの母集団(ロット)からのデータであるか層別してから, 解析する. n 個の故障データを層別した結果, n₁ 個はロット 1 から, n₂ (= n - n₁) 個はロット 2 からのデータであれば, 比率 p を,

 $$ p=\frac{n_{1}}{n} $$ 

と求め, パラメータ  $ m_{1} $ と  $ \eta_{1} $ についてはロット 1 のデータ, パラメータ  $ m_{2} $ と  $ \eta_{2} $ についてはロット 2 のデータを, それぞれワイブル型確率紙に打点して求める.

##### ④ 複合型ワイブル分布の時

ある時間δを境にしてパラメータが変わるワイブル分布を複合型ワイブル分布といい、その分布は(9.2.15)式。

 $$ F(t)=\left\{\begin{array}{l}1-\exp\left[-\left(\frac{t}{\eta_{1}}\right)^{m_{1}}\right]\ ,(0\leq t<\delta)\\1-\exp\left[-\left(\frac{t}{\eta_{2}}\right)^{m_{2}}\right]\ ,(\delta\leq t)\end{array}\right. $$ 

で与えられる。

図9.2.11のように得られているn個のデータをワイブル型確率紙に打点す

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_1/imgs/img_in_image_box_104_543_814_763.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A48Z%2F-1%2F%2F0bba60e32e4ec9137aae0b5625f8ad0877480fff8601690ace8664d747654319" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.11 複合型ワイブル分布と故障データ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_1/imgs/img_in_chart_box_105_868_808_1410.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A48Z%2F-1%2F%2Fd7c8332c8a6461a0de99a4d66119149314343c0096a80762f96b689298914878" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.12 複合型ワイブル分布の故障データのワイブル型確率紙への打点とパラメータの推定</div> </div>


ると，図9.2.12に示すように2本の直線が得られるので，直線①よりパラメータ $ m_{1} $， $ \eta_{1} $を，直線②よりパラメータ $ m_{2} $と $ \eta_{2} $を，直線の交点より $ \delta $を求めることができる。

##### 3）中途打ち切りデータとワイブル解析

##### ① 中途打ち切りデータ

n 個のサンプルを用意して同時に寿命試験をはじめて，サンプル i の寿命データ（故障までの時間）を  $ t_{i}(i=1,\cdots,n) $ とする．これらのデータを小さい方から並べた順序統計量を，

 $$ t_{(1)}<t_{(2)}<\cdots<t_{(i)}<\cdots<t_{(n)} $$ 

とする。

この時，少なくとも1個の故障を観測するには最初の故障が発生する時間 $ t_{1} $までの観測，すべての故障を観測するには最後の故障が発生する時間 $ t_{(n)} $までの観測を必要とする．したがって，図9.2.13に示すように，ある故障数を

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_2/imgs/img_in_chart_box_139_872_798_1438.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A49Z%2F-1%2F%2F6eb97174d0de0a3d5297048fffbf521d995bf285107afd97a616dd9aa758b176" alt="Image" width="55%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.2.13 観測に必要な時間と故障観測数(r)の関係</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_3/imgs/img_in_chart_box_93_204_387_499.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A50Z%2F-1%2F%2F6b8fecee2b36849f11221246eecac031c86ca94f103f060366b828ccbe6dd818" alt="Image" width="24%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 完全データ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_3/imgs/img_in_chart_box_404_201_611_490.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A50Z%2F-1%2F%2Fe7d0196fdc51c9803464820d14ac5c9c32d430194f243b4993c7b1a3b7373ba8" alt="Image" width="17%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) タイプI打ち切りデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_3/imgs/img_in_chart_box_652_200_835_493.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A50Z%2F-1%2F%2F9f9aca42c88836cd63171cca6853c1792a13cbc0a740c1ada7928df51f78f853" alt="Image" width="15%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(c) タイプⅡ打ち切りデータ</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図 9.2.14 完全データと中途打ち切りデータ(×…故障データ, 〇…打ち切りデータ)</div> </div>


観測するのに必要な時間はランダムであり，一定の故障観測数(例えば，r個)の下ではサンプル数nが多ければ観測時間は短くてすみ，少なければ観測時間は長くなる.

この「時間の壁」のために，すべてのサンプルの寿命値を観測し終わる前に試験の打ち切りを行うことが多い．このようにして観測したデータが，中途打ち切りデータである．大きさ n のサンプルが，図 9.2.14(b)のように前もって決められた時間  $ t_{0} $ で打ち切った時をタイプ I（または定時）打ち切りといい，図 9.2.14(c)のように小さい方から数えて r 番目の故障時間で打ち切った場合をタイプ II（または定数）打ち切りという．タイプ I とタイプ II の打ち切りによって得られたデータを，それぞれタイプ I とタイプ II 打ち切りデータという．タイプ II 打ち切りで r = n とすると，すべてのサンプルについて寿命値が観測することになり，このようにして得られたデータを完全データと呼ぶ．

##### ② 中途打ち切りデータのワイブル解析

中途打ち切りデータのワイブル解析では，次の2つに注意して故障データをワイブル型確率紙に打点する.

・タイプⅠとタイプⅡ打ち切りデータの場合には，故障データのみを確率紙に打点する.

• 累積頻度  $ F(t_{(i)}) $ を求める時の  $ n $ は，時刻  $ =0 $ (寿命試験開始時) におけ

るサンプル数 $n$ であり，故障を観測したサンプル数 $r$ とは異なることに注意する.

nは故障データと打ち切りデータ数の合計であり，nと故障を観測しているデータ数rを混同しないようにする．中途打ち切りデータでは，r個の故障データをワイブル型確率紙に打点すれば，直線の当てはめ以降は完全データの場合と同一の手順が適用できる．

## (3) ランダム打ち切りデータのワイブル型累積ハザード紙による解析

##### 1）ランダム打ち切りデータ

ランダム打ち切りデータは，故障データと打ち切りデータを小さい値から順に並べた時，図9.2.15のように故障データの間に打ち切りデータが含まれる形で観測されているデータのことである.

中途打ち切りの場合も打ち切りデータが観測されるが，ランダム打ち切りはより一般化された打ち切りデータが観測されるモデルになる．すなわち，中途打ち切りはランダム打ち切りの特殊な場合になる．これを理解するために，ランダム打ち切りデータが観測される背景を考えてみよう．

##### ① 直列システムの故障データを部位別に解析する場合

直列システムのデータを構成部位ごとに解析して，信頼性改善への情報の価値化による意思決定へ活用していく状況では，ランダム打ち切りデータとして

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//9c6cd71b-4760-493e-9c17-64e29b0dfd1a/markdown_4/imgs/img_in_chart_box_318_1172_574_1461.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A51Z%2F-1%2F%2F9d0f8cfff6733f7ee3fd68dc3b251b1ff148c3ef04508bad481e6cd2d513b817" alt="Image" width="21%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.15 ランダム打ち切りデータ(×:故障データ, ○:打ち切りデータ)</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_0/imgs/img_in_image_box_97_194_824_702.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A00Z%2F-1%2F%2F558e7b113d1ba103ff9e130888ea7788e6868de341801bd31e5391e6679ebf67" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.16 直列システムとランダム打ち切りデータ</div> </div>


の解析が必須になる．例えば，図9.2.16のように2つのサブシステムから構成されている直列システムを考えることにしよう．具体的には，直列システムとして車両を，サブシステム1としては動力系，サブシステム2としては操縦系などその他の装置すべて，というように考えればよい．使用の場では各サブシステム単独ではなく，システムとして統合された直列システムとして用いられる．X₁とX₂を，それぞれサブシステム1と2の故障までの時間とすれば，直列システムとしての寿命値Yは，これらの最小値，

 $$ Y=\min(X_{1},\ X_{2}) $$ 

として観測できる．さらに，システムの故障がサブシステム１と２のどちらの故障によるものか，故障原因についての情報も得ることができる．故障原因をｏで示して，これを，

 $$ \delta=\left\{\begin{array}{l}1: サブシステム 1 の故障が直列システムの故障原因の時 \\ 0: サブシステム 2 の故障が直列システムの故障原因の時 \end{array}\right. $$ 

と定義する。

この直列システムのデータを，故障原因の情報を用いてサブシステムの寿命

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_1/imgs/img_in_chart_box_58_193_390_397.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A00Z%2F-1%2F%2Fb9b22b535ff2c596ea64a8e669326f299f323a6d4c7e6d4062991b6638697c47" alt="Image" width="27%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 直列システムの故障データ(完全データ)</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_1/imgs/img_in_chart_box_394_193_742_389.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A00Z%2F-1%2F%2Ffc16b214c897788d0a5b9dd39a82c7d4c04633f600965e9fcb0ea03cd3f77d52" alt="Image" width="29%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 直列システムの故障データをサブシステム 1のデータに読み替え(ランダム打ち切りデータ)</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.17 直列システムとサブシステムのデータ(×：故障データ，〇：打ち切りデータ)</div> </div>


値に読みかえると，図9.2.17(b)のようにランダム打ち切りデータになる．サプシステム1が2より早く故障すればサブシステム1の故障を観測できる．サブシステム2より遅く故障すれば故障の観測は打ち切りになり，打ち切り時点で故障していないという情報が得られる．

装置や部品などシステムを構成している要素の部品メーカが当該要素別に信頼性データを解析するには，図9.2.17の(a)のデータを(b)のデータへ変換して，システムの寿命データをサブシステムのデータに読みかえればよい．設備の要素別に信頼性データを解析することで，設備の点検や検査の周期等をより的確に決めることができる．このように，システムの寿命データを構成要素や部位別に解析することが，実務の場では不可欠になる．これは，ランダム打ち切りデータを解析する方法の重要性を示唆している．

##### ② 要素ごとの故障をさらに故障モードごとに層別して解析する場合

システムの信頼性データを要素別に解析することと，要素ごとの信頼性データをさらに故障モードごとに層別して解析することは同等である. 10.2 節で述べる競合リスクモデルで故障モードを当該要素の故障の一つのリスクと考えれば，競合リスクモデルのデータ解析にランダム打ち切りデータの解析方法を適用できる.

これは, 第11章のFMEAで故障モードごとに発生頻度を明らかにして影

響解析を行う場合にも応用できる．また，設計変更によりある故障モードの発生頻度をゼロ化すればリスクが低減できて，信頼性は向上する．これを定量的に評価するためには，故障モードごとに信頼性データを解析することが必要となる．

##### ③ 稼働時間が異なる設備の故障データを解析する場合

一定の暦時間を決めて設備の故障データを観測し，これらのデータを解析するためデータを小さい方から並べると，図9.2.18に示すように，ランダム打ち切りの様相を帯びてくる．使用頻度が高ければ，故障までの実使用時間が長くても暦時間で決められた打ち切り時間よりも早く故障が観測される．逆に，使用頻度が低ければ，打ち切り時間で故障していなくても，故障データよりも

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_2/imgs/img_in_image_box_102_765_904_1447.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A01Z%2F-1%2F%2Fbf3f3c56510ecf50e010832e309113171ce0954349f29e34c0fa96f36c9f5de3" alt="Image" width="67%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.18 稼働時間が異なる設備の故障データ</div> </div>


短い実使用時間となる．これらのことから，小さい方から順に実使用時間をベースに信頼性データを並べた時，故障データの前に打ち切りデータが並ぶことがある．

## 2）累積ハザード法による解析

ランダム打ち切りデータのワイブル分布を仮定した解析では，累積ハザード関数に着目して故障データを打点して解析する累積ハザード法がよく用いられる．累積ハザード関数の目盛りが確率紙に用意されていればデータの打点に便利であることから，ワイブル型累積ハザード紙が使用される．累積ハザード法の考え方と手順は以下のようになる．

##### ① 累積ハザード法の考え方と手順

故障データの間に打ち切りデータが入ると，故障データの故障順位を今までの方法では求められなくなる．例えば，図9.2.15のランダム打ち切りデータでは3の故障データは2の打ち切りデータの影響を受け，故障順位としては2と3の2つの可能性がある．2つの可能性を一意化するには，故障順位が2と3になる確率をそれぞれ求めて故障順位の期待値を計算する方法をとる．この方法よりもさらに簡便に解析できる方法が，(9.2.16)式で与えられる累積ハザード関数 $ H(t) $，

 $$ H(t)=\int_{0}^{t}\lambda\left(x\right)dx $$ 

に着目するアプローチである.

$H(t)$ は，(9.2.16)式を見るとわかるように，時間 $x$ における(瞬間)故障率 $\lambda(x)$ と微少時間 $dx$ の積を時刻 $0$ から $t$ まで積分した特性値である．その意味は，図 9.2.19 に示すように，「サンプル 1 個当たりに換算した区間 $(0, t]$ における累積故障数の期待値」である．

したがって，故障データ  $ t $ について以下のように  $ H(t) $ を求めることができる．ランダム打ち切りデータを稼働時間の小さい方から図9.2.20のように順

<div style="text-align: center;"><div style="text-align: center;">λ(x)dxは微少区間(x, x+dx]における故障数の期待値</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_4/imgs/img_in_image_box_119_234_879_487.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A03Z%2F-1%2F%2Fb7d8a45c538037856c170eeff8f763ace39a19108c180725b5fa3b29a62eaf5f" alt="Image" width="63%" /></div>


<div style="text-align: center;"><div style="text-align: center;"> $ H(t)=\int_{0}^{t}\lambda(x)dx $ は区間  $ (0,t] $ におけるのペ故障数の期待値</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.19 累積ハザード関数  $ H(t) $ の意味</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7f48111f-406d-4819-8e98-7701aba9ef15/markdown_4/imgs/img_in_image_box_153_578_847_865.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A03Z%2F-1%2F%2F43415ad8585d22e6d8fe511889ede2b24e22b7e2afa6a410983e47a48269aa6b" alt="Image" width="58%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.2.20 累積ハザード関数  $ H(t) $ の意味</div> </div>


に並べる．$t_{(1)}$における故障は，$t_{(1)}$の直前には $n$ 個のサンプルが稼働しているので，サンプル 1 個当たりに換算すると $1/n$ 回の故障としてカウントする．同様に $t_{(1)}$ における故障は，$t_{(3)}$ の直前には $(n-2)$ 個のサンプルが稼働しているので，サンプル 1 個当たりに換算すると $1/(n-2)$ 回の故障にカウントする．したがって，$t_{(i)}$ までのベ故障数は，

 $$ \widehat{H(t_{(i)})}=\frac{1}{n}+\frac{1}{n-2}+\cdots\frac{1}{n-(i-1)} $$ 

と求めることができる。

このように故障データについて累積ハザード関数を求め, 点(t, H(t))を累積ハザード関数 H(t)の目盛りを備えているワイブル型累積ハザード紙へ打点する. すべての故障データを打点して直線を当てはめれば, それ以降はワイブ

ル型確率紙と同一の方法で信頼性特性値を求めることができる。

### ② ワイブル型累積ハザード紙の原理

図9.2.4のワイブル型確率紙で，左側の縦軸に不信頼度 $ F(t) $のかわりに，次の(9.2.17)式の関係，

 $$ \begin{aligned}&H(t)=\ln\frac{1}{1-F(t)}\\ &\Leftrightarrow\ln H(t)=\ln\ln\frac{1}{1-F(t)}=m(\ln t-\ln\eta)\\ \end{aligned} $$ 

を用いて，累積ハザード関数  $ H(t) $ の目盛りを備えている確率紙がワイプル型累積ハザード紙である．この原理の図解を図9.2.21に示す．

もしワイブル型累積ハザード紙を利用することができなければ,  $ H(t) $ を  $ F(t) $ の値へ,

 $$ F(t)=1-\exp\left\{-H(t)\right\} $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a3dda76e-9720-412b-9b7e-12f75b8cf90b/markdown_0/imgs/img_in_chart_box_66_894_770_1430.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A28Z%2F-1%2F%2F84dcc04f0f43e4a825db8a473c14d73449a923000b6fe14d1427f06c62e14c79" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.21 ワイブル型累積ハザード紙の原理</div> </div>


の関係を利用して変換し，点(t, F(t))をワイブル型確率紙へ打点すればよい

##### ③ ワイブル型累積ハザード法による解析手順

故障データ $t$ について $H(t)$ を求めて，ワイブル型累積ハザード紙に点 $t_{t}$ $H(t)$ を打点する．打点以降直線の当てはめ，パラメータの推定等はワイブル型確率紙と同じである．

以下に手順化して、解析方法を示す。

■手順1：故障並びに中途打ち切りデータを稼働時間の小さい方から大きい方へと順に並べる

■手順2：故障データ  $ t_i $ については  $ \delta_i = 1 $，打ち切りデータの場合には  $ \delta_i = 0 $ として区分する。

☑手順3：各データに値の大きい方から順位 $ K_i $：逆順位をつける。

☑ 手順 4：故障データについて， $ K_i $ の逆数  $ 1/K_i $ を求める．故障ではない打ち切りのデータについては考えないこととする．

■手順5：故障データについて，累積ハザード関数  $ H(t) $ を求める． $ t_i $ を故障データとすると， $ t_i $ における累積ハザード関数  $ H(t) $ は，

 $ H(t) = \text{故障データ } t \text{ までの故障データの逆順位の逆数の和により求めればよい。} $

☑手順6：ワイブル型累積ハザード紙に，故障データを点(t,  $ H(t) $)の位置へ打点する.

▪手順7： $ H(t) $軸の30～150% の点を重視して直線を当てはめる.

☑手順8：直線の傾きより $m$ を求める，そのため，「$m$ の推定点(Int 軸の 1 と $\ln H(t)$ 軸の 0 の点)」を通って，当てはめた直線に平行な直線を引き，これが $\ln t = 0$ と交わる $\ln H(t)$ 軸の目盛をその符号を変えて読むと，求める $m$ の推定値になる。

☑手順9：当てはめた直線と$\ln H(t)=0$ の交点を下方にたどり，対応する$t$ 軸の目盛を読むと，これが$\eta$ の推定値になる.

▪手順 10：MTTF は  $ m $ に対応する  $ \mu/\eta $ 尺の目盛を読んで，これに手順 9 で求

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a3dda76e-9720-412b-9b7e-12f75b8cf90b/markdown_2/imgs/img_in_chart_box_51_190_771_674.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A29Z%2F-1%2F%2F86735099276b04ff3d6c0429ab56b41541378ea9cfc00dd47b8de4cc402eee3d" alt="Image" width="60%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.22 累積ハザード紙の使い方</div> </div>


めたηの値を乗ずることによって求められる。

■手順 11 時点  $ t_{0} $ における信頼度  $ R(t_{0}) $ は,  $ t_{0} $ における不信頼度  $ F(t_{0}) $ をワイブル型累積ハザード紙の  $ F(t) $ 軸より,

 $$ \widehat{R(t_{0})}=1-\widehat{F(t_{0})} $$ 

と求めればよい。

以上の手順を，図9.2.22にまとめて示す.

##### 【例题 9.2.2】ランダム打ち切りデータのワイブル解析の例题

大きさ n = 12 のサンプルについて, 寿命試験を行ったデータを表9.2.5

<div style="text-align: center;"><div style="text-align: center;">表9.2.5 ランダム打ち切りによる寿命データ</div> </div>


(100 時間単位)



<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>试料No.</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>12</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>寿命值</td><td style='text-align: center; word-wrap: break-word;'>2.5</td><td style='text-align: center; word-wrap: break-word;'>3.5</td><td style='text-align: center; word-wrap: break-word;'>4.7</td><td style='text-align: center; word-wrap: break-word;'>6.5</td><td style='text-align: center; word-wrap: break-word;'>8.0</td><td style='text-align: center; word-wrap: break-word;'>9.1</td><td style='text-align: center; word-wrap: break-word;'>9.9</td><td style='text-align: center; word-wrap: break-word;'>12.0</td><td style='text-align: center; word-wrap: break-word;'>14.0</td><td style='text-align: center; word-wrap: break-word;'>15.0</td><td style='text-align: center; word-wrap: break-word;'>20.0</td><td style='text-align: center; word-wrap: break-word;'>30.0</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>備考</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td></tr></table>

に示す．〇印は故障前にランダムに中途打ち切りしたもので．×印は故障データを示している．このデータをワイプル解析して．mとMTTF及びBライフを推定せよ．

☑ 手順1：表9.2.5のデータを小さいものから大きいものへと順に並べる(今の例題ではすでに大きさの順に並んでいる).

▪手順2：故障と打ち切りを示すδの値を記入する.

▪手順3：各データに値の大きい方からの順位 $ K_{i} $をつける.

▪手順4：故障データについて， $ K_i $の逆数 $ 1/K_i $を求める。

■手順5：故障データについて，表9.2.6に示すように，累積ハザード関数$H(t)$を逆順位の逆数の和として求める.

☑ 手順6：図9.2.23のワイプル型累積ハザード紙に，故障データを点(t.H(t))の位置に打点する.

▪手順7：打点したデータに直線を当てはめる．この例题の打点はほぼ直線上に並んでいるので，寿命分布はワイブル分布と考えてよいことを示している．

<div style="text-align: center;"><div style="text-align: center;">表9.2.6 ランダム打ち切りデータと累積ハザード法</div> </div>


(100時間単位)



<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>データ</td><td style='text-align: center; word-wrap: break-word;'>$ \delta_{i} $</td><td style='text-align: center; word-wrap: break-word;'>$ K_{i} $</td><td style='text-align: center; word-wrap: break-word;'>$ 1/K_{i} $</td><td style='text-align: center; word-wrap: break-word;'>$ \widehat{H(t)} $</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>2.5</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>12</td><td style='text-align: center; word-wrap: break-word;'>1/12</td><td style='text-align: center; word-wrap: break-word;'>1/12 = 8.3(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>3.5</td><td style='text-align: center; word-wrap: break-word;'>0</td><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>—</td><td style='text-align: center; word-wrap: break-word;'>—</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>4.7</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>1/10</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10 = 18.3(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>6.5</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>1/9</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9 = 29.4(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>8.0</td><td style='text-align: center; word-wrap: break-word;'>0</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>—</td><td style='text-align: center; word-wrap: break-word;'>—</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>9.1</td><td style='text-align: center; word-wrap: break-word;'>0</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>—</td><td style='text-align: center; word-wrap: break-word;'>—</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>9.9</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>1/6</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9+1/6 = 46.0(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>12.0</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>1/5</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9+1/6+1/5 = 66.0(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>14.0</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>1/4</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9+1/6+1/5+1/4 = 91.0(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>15.1</td><td style='text-align: center; word-wrap: break-word;'>0</td><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>—</td><td style='text-align: center; word-wrap: break-word;'>—</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>20.0</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>1/2</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9+1/6+1/5+1/4+1/2 = 141.0(%)</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>30.0</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>1/1</td><td style='text-align: center; word-wrap: break-word;'>1/12+1/10+1/9+1/6+1/5+1/4+1/2+1/1 = 241.0(%)</td></tr></table>

<div style="text-align: center;"><div style="text-align: center;">図9.2.23 ワイブル型累積ハザード紙によるデータ解析</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//a3dda76e-9720-412b-9b7e-12f75b8cf90b/markdown_4/imgs/img_in_chart_box_95_193_756_1432.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F2d6bdb585e8bbb0af6b1a39224517824936ecc3edc356010a297a161c10176c5" alt="Image" width="55%" /></div>


■手順8：「mの推定点」を通り当てはめた直線に平行な直線を引き, これが

$\ln t=0$ と交わる点の $\ln H(t)$ 軸の目盛りを読む. その絶対値をとって,

$\hat{m}=1.41$

となる.

■手順9：当てはめた直線と$\ln H(t)$軸の$0$との交点の$t$軸の値より，$\hat{\eta}=1.570$（時間）

となる。

■手順10：手順9でμを求めるために引いた直線を延長して，μ/η尺の値を読むと， $ \left(\frac{\mu}{\eta}\right)=0.910 $となるから，

 $$ \widehat{MTTF}=\hat{\eta}\times\left(\frac{\widehat{\mu}}{\eta}\right)=1570\times0.910=1,475( 時間 ) $$ 

と求められる。

▣手順 11 :  $ F(t) $ 軸の 10% と当てはめた直線の交点の  $ t $ 軸の値を求めると,

 $ \widehat{B_{10}ライフ} = 320 $ (時間)

となる.

##### (4) 突然死滅法による信頼性データの解析

ワイブル分布に従う k 個の寿命データの最小値がワイブル分布に従うことを利用すると，試験時間の短縮を行ってデータを取得できる．最小値を観測すれば，その時点で試験あるいは観測を打ち切るところから，突然死滅法と呼ばれている．

##### 1）突然死滅法の考え方

次の(9.2.19)式に示すワイブル分布，

 $$ F(t)=1-\exp\left[-\left(\frac{t}{\eta}\right)^{m}\right],(0\leq t) $$ 

に従う k 個のサンプルの最小値の分布は,

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9860a8c-2f12-4cd5-9baf-16aedf9ff173/markdown_1/imgs/img_in_image_box_58_203_207_381.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2Fc3bb1177e83a5dcbd1adffedf5cd90f01544e3ca94cb02f5a857aca57abfea7f" alt="Image" width="12%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 1組のデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9860a8c-2f12-4cd5-9baf-16aedf9ff173/markdown_1/imgs/img_in_chart_box_220_201_384_382.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2Fbdcacb059e45c8c97f9905288af8e4dc7fb973c14b8d4d592ae5c1b582f3f9ab" alt="Image" width="13%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 2組のデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9860a8c-2f12-4cd5-9baf-16aedf9ff173/markdown_1/imgs/img_in_chart_box_404_203_605_381.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2Fb4a6125866239b0158b7aa1f5b7c7ef8abf9e6417c354f8285dbe25e9ae9b22e" alt="Image" width="16%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(r) r 組のデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9860a8c-2f12-4cd5-9baf-16aedf9ff173/markdown_1/imgs/img_in_chart_box_614_211_809_383.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F67a1f5617393190332444ec42ef1fce7af47e04e5be46dfa99bf778df3b85f46" alt="Image" width="16%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(×：故障，○：中途打ち切り)</div> </div>


<div style="text-align: center;"><div style="text-align: center;">r 個の最小値の順序統計量</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.24 突然死滅法による信頼性データの観測</div> </div>


 $$ F_{1,k}(t)=1-\exp\left[-k\Big(\frac{t}{\eta}\Big)^{m}\right],(0\leq t) $$ 

となって, 形状パラメータ m, 尺度パラメータ k⁻¹/ᵐηのワイブル分布になる.

したがって, この最小値を r 個観測することによって, ワイブル分布のパラメータ m と η を短い観測時間でかつ精度よく求めることができる. すなわち,

図 9.2.24 に示すように, n = kr 個のサンプルを k 個ずつ r 組に分けて, r 組の

サンプルのそれぞれの最小値,

 $$ t_{1.1},\quad t_{1.2},\quad\cdots,\quad t_{1.r} $$ 

を観測する．このデータは，(9.2.20)式で与えられる形状パラメータ m のワイブル分布に従うことになる．

この性質は，次のようにパラメータ $m$ と $\eta$ の推定に活用できる．まず，$r$ 個のデータをワイブル型確率紙に打点して直線を当てはめて，$k$ 個のデータの最小値のメジアン $B_{50}$ を求める．次に，点 $A=\left(B_{50},\frac{1-0.3}{k+0.4}\times100(\%)\right)$ を通りメジアン $B_{50}$ を求めた時の直線と平行な直線を引く．この直線から $m$ と $\eta$ は，通常の手順を適用して求めることができる．

##### 2）突然死滅法による信頼性データのワイブル解析

突然死滅法による図9.2.24のデータの解析を，手順にまとめると以下のようになる.

▪手順1：r個のデータ  $ t_{1,1} $,  $ t_{1,2} $, …,  $ t_{1,r} $ を小さい方から順に並べる．これを．

 $$ t_{(1,1)}\leq t_{(1,2)}\leq\cdots\leq t_{(1,r)} $$ 

とする。

◼手順2：i番目のデータの累積頻度 $ F(t) $を，表9.2.2のメジアンランク表あるいは(9.2.11)式の近似式により，メジアンランク法で求める.

▪手順3：r個のデータをワイブル型確率紙に打点して，直線上に並んでいることが確認できれば，適切な直線を当てはめる.

▪手順4：当てはめた直線より最小値のメジアンを B_{50} を求めて，次に点

 $$  A=\left(B_{50},\ \frac{1-0.3}{k+0.4}\times100(\%)\right) $$ 

を通り，かつ手順3で求めた直線に平行な直線を引く。

◼手順5：手順4で求めた直線より，ワイブル分布のm，ηとMTTFなどの信頼性特性値を通常の方法により求める.

以上の手順を，図9.2.25にまとめて示す.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//d9860a8c-2f12-4cd5-9baf-16aedf9ff173/markdown_2/imgs/img_in_chart_box_109_861_916_1432.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2F1290d1ed3058517ef940e4dbb322ba16b936fc1c7d68328e1ae001e30afde4b5" alt="Image" width="67%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.25 突然死滅法による信頼性データのワイブル型確率紙による解析</div> </div>


##### 3）突然死滅法による時間短縮効果

突然死滅法を適用すれば，全数観測の場合と比べて時間を短縮する効果が得られる．$T_{n,n}$ と $T_{k,r}$ を，それぞれ，

 $ T_{n,n}=n(=kr) $個のサンプルすべてのデータを観測するために必要な試験時間のメジアン

 $ T_{k,r}= $ 突然死滅法による r 個のデータを観測するために必要な試験時間の

メジアン

と定義すると，時間短縮率  $ f $ は，

 $$ f=T_{k,r}/T_{n,n} $$ 

である。

逐次的に r 組の試験を行う場合は,

 $$ f=\varphi\left\{\frac{\left(1/k\right)\ln2}{\ln\left[1/\lambda_{n}(1)\right]}\right\}^{1/m} $$ 

となる. ここで,  $ \lambda_{n}(1) $は  $ n $ 個の最小値のメジアンランク,  $ \varphi $ は,

 $$ \varphi=\frac{\left(r-1\right)!\Gamma\left(1+1/m\right)\left(r-1+\ln2\right)^{1/m}}{\left(\ln2\right)^{1/m}\Gamma\left(r+1/m\right)} $$ 

である。

r組の試験を同時に行う場合は,

 $$ f=\left\{\frac{\left(1/k\right)\ln1/\lambda_{r}\left(1\right)}{\ln\left[1/\lambda_{n}\left(1\right)\right]}\right\}^{1/m} $$ 

となる。

時間短縮率は，例えば，形状パラメータ  $ m = 1 $ で， $ n = 80 $， $ r = 10 $， $ k = 8 $ の時には，逐次的に  $ r $ 組の試験を行う場合は  $ f = 25.54(\%) $ であり，同時に行う場合は  $ f = 7.12(\%) $ である。

## (5) ワイブル分布による信頼性データの数値解法

ワイプル型確率紙による信頼性データの解析は簡易で実用性が高く，打点したデータの並び方を直視することにより，

・信頼性データがワイブル分布に従っていること

・ワイブル分布の位置パラメータγの値が0であること

の検証あるいは確認を行うことができる．これらの検証を通し集団から逸脱しているデータ(outlier)を発見できることがある．データ解析の前提条件が成立している確認を通して．データの一様性．トレーサビリティへの関心も高まる．

一方，直線の当てはめが人により異なることも(欠点というよりは長所と考えた方がよいけれども)事実であり，結果としてパラメータの推定に個人差が生じる．このようなことを回避する方法として数値解法がある．未知のパラメータの推定で最もよく用いられる方法は最尤法である．以下，最尤法によるワイブル分布のパラメータの推定方法について述べる．

## 1）最尤法によるパラメータの推定

#### ① 最尤法の考え方

パラメータθで表現できる密度関数を$f(t;\theta)$とする．$n$個の完全データ$(t_{1},t_{2},\cdots,t_{n})$からθを求める考え方として，最尤法がある．これは，データが観測される確率，

 $$ \begin{aligned}&P[T_{1}\in(t_{1},t_{1}+dt_{1}),T_{2}\in(t_{2},t_{2}+dt_{2}),\cdots,T_{n}\in(t_{n},t_{n}+dt_{n})]\\&=\prod_{i=1}^{n}f(t_{i};\theta)dt_{i}\\ \end{aligned} $$ 

に対応する尤度，

 $$ l(\theta;t_{1},t_{2},\cdots,t_{n})=\prod_{i=1}^{n}f(t_{i};\theta) $$ 

を考えて, 未知のパラメータθを求める考え方である.

(9.2.24)式の尤度をθの関数と考え, これを尤度関数と呼ぶ. 図9.2.26に示すように, データ $ (t_{1}, t_{2}, \cdots, t_{n}) $が観測される確率に対応している尤度が最大.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//42067eea-0578-4b11-bdac-fcd011b9b365/markdown_0/imgs/img_in_image_box_62_190_813_642.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A29Z%2F-1%2F%2F9345321dfbaaf56789c084704449f60b875100cbf1f01dd983a414bc1e5d86a6" alt="Image" width="63%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.26 最尤法の考え方</div> </div>


 $$ l(\theta;t_{1},t_{2},\cdots,t_{n})=\prod_{i=1}^{n}f(t_{i};\theta)\xrightarrow{\theta=\hat{\theta}}\max $$ 

となるように未知のパラメータθを求める. このようにして求めたθをθの最

尤推定量と呼ぶ.

##### ② 最尤法によるワイブル分布のパラメータの推定方法

##### (a) 完全データの場合

$n$ 個のサンプルすべてについて故障が観測されている完全データ $(t_{1}, t_{2}, \cdots, t_{n})$ では，尤度関数が，

 $$ l(m,\eta;t_{1},t_{2},\cdots,t_{n})=\prod_{i=1}^{r}\frac{m}{\eta}\Big(\frac{t_{i}}{\eta}\Big)^{m-1}\exp\Big[-\Big(\frac{t_{i}}{\eta}\Big)^{m}\Big] $$ 

となる．尤度関数が最大となるように  $ m, \eta $ を推定するには，(9.2.26)式の対数を取り  $ m, \eta $ でそれぞれ偏微分して，これらの値が  $ 0 $ となるようにすればよい．すなわち，

 $$ \begin{aligned}&\frac{1}{n}\sum_{i-1}^{n}\ln t_{i}=\frac{\sum_{i-1}^{n}t_{i}^{m}\ln t_{i}}{\sum_{i-1}^{n}t_{i}^{m}}-\frac{1}{m}\\&\eta^{m}=\frac{1}{n}\sum_{i-1}^{n}t_{i}^{m}\\ \end{aligned} $$ 

の連立方程式の解として$\hat{m}$と$\hat{\eta}$を求めれば, $\hat{m}$と$\hat{\eta}$は, それぞれ, $m$と$\eta$の最尤推定量である.

(b) タイプⅠ打ち切りデータの場合

タイプⅠ打ち切りデータでは，n個のサンプルの打ち切り時間  $ t_{0} $ までに故障した r 個のサンプルのデータ  $ (t_{(1)}<t_{(2)}<\cdots<t_{(r)}) $ と， $ (n-r) $ 個の  $ t_{0} $ での打ち切りデータを観測することができる．この場合の尤度関数は，

 $$ \begin{aligned}l(m,\eta;t_{(1)},t_{(2)},\cdots,t_{(r)},t_{0})&=\frac{n!}{(n-r)!}\prod_{i=1}^{r}\frac{m}{\eta}\Big(\frac{t_{(i)}}{\eta}\Big)^{m-1}\exp\Big[-\Big(\frac{t_{(i)}}{\eta}\Big)^{m}\Big]\\&\times\Big\{\exp\Big[-\Big(\frac{t_{0}}{\eta}\Big)^{m}\Big]\Big\}^{n-r}\quad(9.2)\end{aligned} $$ 

となる. したがって,  $ m $ と  $ \eta $ の最尤推定量  $ \hat{m} $ と  $ \hat{\eta} $ は,

 $$ \begin{aligned}&\left[\frac{\sum_{i=1}^{m}t_{(i)}^{m}\ln t_{(i)}+(n-r)t_{0}^{m}\ln t_{0}}{\sum_{i=1}^{m}t_{(i)}^{m}+(n-r)t_{0}^{m}}-\frac{1}{m}\right]-\frac{1}{r}\sum_{i=1}^{n}\ln t_{(i)}=0\\&\eta=\left[\frac{\sum_{i=1}^{m}t_{(i)}^{m}+(n-r)t_{0}^{m}}{r}\right]^{1/m}\\ \end{aligned} $$ 

の連立方程式の解として求めることができる。

(c) タイプⅡ打ち切りデータの場合

タイプⅠ打ち切りデータでは，n個のサンプルのうちr個のサンプルが故障

した時点で打ち切りとなるので，故障データ（ $ t_{(1)}<t_{(2)}<\cdots<t_{(r)} $）と（ $ n-r $）個の $ t_{(r)} $での打ち切りデータを観測できる．したがって，この場合の尤度関数は，

 $$ \begin{aligned}l(m,\eta;t_{(1)},t_{(2)},\cdots,t_{(r)})=&\frac{n!}{(n-r)!}\prod_{i=1}^{r}\frac{m}{\eta}\Big(\frac{t_{(i)}}{\eta}\Big)^{m-1}\exp\Big[-\Big(\frac{t_{(i)}}{\eta}\Big)^{m}\Big]\\&\times\Big\{\exp\Big[-\Big(\frac{t_{(r)}}{\eta}\Big)^{m}\Big]\Big\}^{n-r}\quad(9)\end{aligned} $$ 

となる. したがって,  $ m $ と  $ \eta $ の最尤推定量  $ \hat{m} $ と  $ \hat{\eta} $ は,

 $$ \left[\frac{\sum_{i=1}^{m}t_{(i)}^{m}\ln t_{(i)}+(n-r)t_{(r)}^{m}\ln t_{(r)}}{\sum_{i=1}^{m}t_{(i)}^{m}+(n-r)t_{(r)}^{m}}-\frac{1}{m}\right]-\frac{1}{r}\sum_{i=1}^{n}\ln t_{(i)}=0 $$ 

 $$ \eta=\left[\frac{\sum\limits_{i=1}^{m}t_{(i)}^{m}+(n-r)t_{(r)}^{m}}{r}\right]^{1/m} $$ 

の解として求めることができる。

(d) ランダム打ち切りデータの場合

10.2節の競合リスクモデルの「ランダム打ち切りデータの解」の項で述べる。

##### 2）逐次確率比検定の応用

##### ① 逐次確率比検定の考え方

信頼性データを収集する時には，故障データの収集に時間を要する時間の壁とともに，多くのサンプルを準備することが難しい「数の壁」がある．この壁を克服する方法の一つとして，新たなデータ１個観測するために検証を行って観測を継続するか否か決める逐次確率比検定の考え方がある．

図9.2.24に示すように，信頼性の高い良いロット(密度関数は $ f_0(t)=f(t;\theta_0) $)と信頼性の低い悪いロット(密度関数は $ f_1(t)=f(t;\theta_1) $)があるとしよう．少数のサンプルの信頼性データに基づいて，どちらのロットから抽出されたものであるか検証する方法を考えてみる．これは統計的仮説検定の一つで

ある．統計的仮説検定では，帰無仮説$H_{0}$と対立仮説$H_{1}$の2つの仮説を考えるのが特徴である．帰無仮説は棄却したい仮説，対立仮説は帰無仮説を棄却した時に受け入れる仮説である．今2つの仮説を，

・帰無仮説  $ H_{0} $ : サンプルは悪いロットから抽出されたものである

・対立仮説 H₁：サンプルは良いロットから抽出されたものである

とする. 2つの仮説を考えるねらいは, 誤って帰無仮説を棄却する確率である

有意水準(第一種の誤り(誤報)の確率ともいう) α を事前に明確にして棄却域

を設定するところにある. さらに棄却域に基づき, 帰無仮説を棄却するべきに

もかかわらず棄却しない第二種の誤り(欠報)の確率βについても明らかにできる.

今， $ t_{1} $ の故障データを観測した時，このサンプルがどちらのロットから抽出されたのか判断する場合を考えてみよう．一つのアイディアとしては，サンプルが悪いロットと良いロットから抽出される確率を比較して判断することが考えられる．具体的には，確率比，

 $$ r_{1}=\frac{f(t_{1};\theta_{1})}{f(t_{1};\theta_{0})} $$ 

を考える．ｍｉが大きければ帰無仮説を受け入れ，小さければ対立仮説を受け入れることが合理的な判断であり，大きくもなく小さくもなければさらにサンプリングしてデータを集めて判断する．これは，図9.2.27に示す確率比の考え方からも明らかである．

実際, 所与のαとβに対してn個のデータ(t₁, t₂, …, tₙ)から逐次確率比.

 $$ r_{n}=\frac{f(t_{1};\theta_{1})}{f(t_{1};\theta_{0})}\times\frac{f(t_{2};\theta_{1})}{f(t_{2};\theta_{0})}\times\cdots\times\frac{f(t_{n};\theta_{1})}{f(t_{n};\theta_{0})} $$ 

を求めて、

 $$ r_{n}\leq\frac{\beta}{1-\alpha}=A\quad\Leftrightarrow\quad 良いロットから抽出したと判断 $$ 

 $$ r_{n}\geq\frac{1-\beta}{\alpha}=B\quad\Leftrightarrow\quad 悪いロットから抽出したと判断 $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//42067eea-0578-4b11-bdac-fcd011b9b365/markdown_4/imgs/img_in_image_box_101_182_751_604.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A33Z%2F-1%2F%2F613b62b1f6e6f6de097037ddf8903b059d621c13d3720c1806d23cfb9b5cb74b" alt="Image" width="54%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.2.27 逐次確率比検定の考え方</div> </div>


 $$ A<r_{n}<B $$ 

判断を保留して, さらにサンプルを抽出して改めて判断

というように，逐次的に判断する． $ A<r_{n}<B $ の時には，判断を留保してさらにサンプル１個を抽出して改めて検証する．

このように逐次確率比検定では，データを取得するために仮説検証を行う。これによって，所与のαとβを満たすために必要なサンプル数が，前もってサンプル数を決めて検証を行う方式と比較して，平均的に少なくなることが明らかになっている。ただし適用できる前提として，(9.2.33)式での逐次確率比が求められなければならないので，未知のパラメータが複数ある場合には適用できない。

##### ② ワイブル分布への応用

形状パラメータ m が同一で尺度パラメータ ηが異なる 2つのワイブル分布を考える．それぞれの尺度パラメータを  $ \eta_{0},\eta_{1} $ として，  $ \eta_{1}<\eta_{0} $ とする．形状パラメータ m が既知であれば，逐次確率比検定によりサンプルがどちらのワイプル分布に従う母集団から抽出したものであるか検証できる．

具体的には，$n$ 個のデータ $(t_{1}, \quad t_{2}, \quad \cdots, \quad t_{n})$ から逐次確率比 $r_{n}$ を求めると。

 $$ \begin{aligned}r_{n}&=\frac{f(t_{1};\theta_{1})}{f(t_{1};\theta_{0})}\times\frac{f(t_{2};\theta_{1})}{f(t_{2};\theta_{0})}\times\cdots\times\frac{f(t_{n};\theta_{1})}{f(t_{n};\theta_{0})}\\&=\prod_{i=1}^{n}\frac{\frac{m}{\eta_{1}}\Big(\frac{t_{i}}{\eta_{1}}\Big)^{m-1}\exp\Big[-\Big(\frac{t_{i}}{\eta_{1}}\Big)^{m}\Big]}{\frac{m}{\eta_{0}}\Big(\frac{t_{i}}{\eta_{0}}\Big)^{m-1}\exp\Big[-\Big(\frac{t_{i}}{\eta_{0}}\Big)^{m}\Big]}\\&=\prod_{i=1}^{n}\Big(\frac{\eta_{0}}{\eta_{1}}\Big)^{m}\exp\Big[\Big(\frac{t_{i}}{\eta_{0}}\Big)^{m}-\Big(\frac{t_{i}}{\eta_{1}}\Big)^{m}\Big]\\ \end{aligned} $$ 

となる. (9.2.34)式の逐次確率比の対数を考えれば,

 $$ \begin{aligned}\ln r_{n}&=\sum_{i=1}^{n}\left[m\ln\frac{\eta_{0}}{\eta_{1}}+\left(\frac{t_{i}}{\eta_{0}}\right)^{m}-\left(\frac{t_{i}}{\eta_{1}}\right)^{m}\right]\\&=\ln r_{n-1}+m\ln\frac{\eta_{0}}{\eta_{1}}+\left(\frac{t_{n}}{\eta_{0}}\right)^{m}-\left(\frac{t_{n}}{\eta_{1}}\right)^{m}\end{aligned} $$ 

となる。

### 9.3 指数分布による信頼性データ解析

指数分布は，故障パターンが CFR 型である，すなわち故障率が時間によらず一定である偶発故障型の寿命分布である．この分布は，多くの要素から構成されていて特定の弱点を有していない複雑なシステムの寿命分布として，適合性の良いことが知られている．

指数分布に従う信頼性データの解析は，(位置パラメータを考慮しなくてもよい場合には)パラメータと故障間隔の平均であるMTBFの関係に着目すれば容易である.

また，故障の際に取り替えを行う場合には，故障間隔が指数分布であれば一定時間内の故障数はポアソン分布になる．故障数がポアソン分布に従うことから，故障数の確率評価さらに故障した場合に備えて準備する予備品数の決定などに活用できる．

## (1) 指数分布

##### 1）指数分布とは

指数分布は，次の2つの視点，

・ワイブル分布

・故障パターン

から導くことができる。

#### ① ワイブル分布と指数分布

9.2節のワイブル分布のパラメータについてγ = 0, m = 1とすれば, 指数分布を導くことができる. この時, (9.2.2)式の信頼度 R(t)は,

 $$ R\left(t\right)=\exp\left(-\frac{t}{\eta}\right) $$ 

となる。

##### ② 故障のパターンと指数分布

もう一つは，故障のパターンがCFRと仮定して導く方法である．この仮定の下で故障率はλ(t) = λ(一定)となることと，(5.1.4)式の信頼度と故障率の関係を考慮すれば信頼度R(t)は，

 $$ \begin{aligned}R\left(t\right)&=\exp\Biggl[-\int_{0}^{t}\lambda\left(x\right)dx\Biggr]\\&=\exp\Biggl(-\int_{0}^{t}\lambda dx\Biggr)=\exp\left(-\lambda t\right)\end{aligned} $$ 

となる。

##### 2）指数分布のパラメータの意味

2つの視点から導いた指数分布の信頼度  $ R(t) $ の表現は、それぞれ考えているパラメータが異なるように見える。これはパラメータ化の考え方が異なることに起因する。（9.3.1）と（9.3.2）式は信頼度  $ R(t) $ についての異なる表現である

ことに注意すれば, パラメータηとλの間には,

 $$ \eta=\frac{1}{\lambda} $$ 

の関係が成立することがわかる。

よって, パラメータηは故障率の逆数に等しいので, 修理系を有する場合にはMTBF, 修理系を考えない場合にはMTTFそのものとなる. 実際に平均を求めると,

 $$ \begin{aligned}E\left(T\right)&=\int_{0}^{\infty}tf(t)dt=\int_{0}^{\infty}t\frac{1}{\eta}\exp\Big(-\frac{t}{\eta}\Big)dt\\&=\Big[-t\exp\Big(-\frac{t}{\eta}\Big)\Big]_{0}^{\infty}+\int_{0}^{\infty}\exp\Big(-\frac{t}{\eta}\Big)dt=\eta\end{aligned} $$ 

となる。

##### 3）指数分布と故障モデル

指数分布は偶発故障の寿命分布になることから, 次の故障モデルの寿命分布として導くことができる(これは Drenick $ ^{[3]} $ により導かれている).

多くの構成要素からなる直列システムを考えて，特定の構成要素に起因してシステムが故障する弱点は有していないとしよう．そして，構成要素が故障すればすぐに修理や取り替えにより復元して，システムが機能するとしよう．このような前提が成立する場合には，図9.3.1に示すように構成要素の故障を重ね合わせることでシステムの故障を導くことができる．システムの故障間隔を$T_{1},~T_{2},~T_{3},\cdots$とすれば，これらは互いに独立でMTBFが，

 $$ MTBF=\frac{1}{\frac{1}{MTBF_{1}}+\frac{1}{MTBF_{2}}+\cdots+\frac{1}{MTBF_{n}}} $$ 

となる指数分布に近似的に従う．ここで．MTBFは構成要素iの平均故障間隔である．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fc6e2ad8-a32e-480d-b0e7-73a39be79a8f/markdown_3/imgs/img_in_image_box_45_207_818_817.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F0e044f9f70f3b11052cbeb485a6cb3a6a3acadadfd289d951cc03f277cfe6abc" alt="Image" width="64%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 構成要素と直列システムの故障</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.1 構成要素とシステムの故障の関係</div> </div>


## (2) 指数分布による信頼性データの解析

指数分布はシステムの寿命分布に用いられることが多く，システムでは構成要素が故障すれば取り替えなどでシステムの機能が復元するように対応するので，パラメータηをMTBFと称して以下では説明する(故障しても修理しない場合には，MTBFをMTTFに読み替えればよい).

## 1）MTBFの推定

##### ① 点推定

指数分布の MTBF の点推定は非常に簡単で, 図 9.3.2 に示す完全データ, タイプ 1, タイプ Ⅱ の中途打ち切りデータ, ランダム打ち切りデータを含めて,

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fc6e2ad8-a32e-480d-b0e7-73a39be79a8f/markdown_4/imgs/img_in_chart_box_84_163_384_465.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F228158d5f60eb689eb61c27348ac3b56ac4f6218dc24ae494c8a2eb422e20e5d" alt="Image" width="25%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 完全データ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fc6e2ad8-a32e-480d-b0e7-73a39be79a8f/markdown_4/imgs/img_in_chart_box_400_150_613_454.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F91d874de4d03f2aaf0edc2b3c481440f66b98ec877914e0d967760962820a4eb" alt="Image" width="17%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) タイプI打ち切りデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fc6e2ad8-a32e-480d-b0e7-73a39be79a8f/markdown_4/imgs/img_in_image_box_651_155_836_474.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F14052e8ad0601b7d07969935edb595eaa7e4a1f449e45610d4ddc15f18b4cb1c" alt="Image" width="15%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(c) タイプⅡ打ち切りデータ</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.2 ３つのタイプの信頼性データ</div> </div>


 $$ \widehat{MTBF}=\frac{T}{r}=\frac{ 総試驗時間 }{ 故障観測数 } $$ 

と求めればよい．分子の総試験時間は故障データと打ち切りデータの総計であるから．

 $ T = $ 故障データの総和＋打ち切りデータの総和となる.

具体的に表せば，完全データでは，

 $$ \widehat{MTBF}=\frac{\sum_{i=1}^{n}t_{(i)}}{n} $$ 

となり、タイプⅠ打ち切りでは、

 $$ \widehat{MTBF}=\frac{\sum_{i=1}^{r}t_{(i)}+(n-r)t_{0}}{r} $$ 

で、タイプⅡ打ち切りでは、

 $$ \widehat{\mathrm{MTBF}}=\frac{\sum_{i=1}^{r}t_{(i)}+(n-r)t_{(r)}}{r} $$ 

である。

Tの値は故障データのみの総和でないことに注意が必要である．分母の r は、完全データの場合を除き、サンプル数 n とは異なり故障観測数である．MTBF が故障間隔の平均であることと、指数分布では故障率が一定であることから、n ではなく r で割ることの必然性は明らかであろう．

また，(9.3.6)式はMTBFの最尤推定量になっている．ワイプル分布のパラメータ $m$ と $\eta$ の最尤推定量を求める (9.2.19) と (9.2.20) 式に $m=1$ を代入して，$MTBF=\hat{\eta}$ を求めると (9.3.6) 式が得られることから明らかであろう．

##### ② 区間推定

未知のパラメータを一つの値で推定する点推定に加えて,「ある値より大きく, ある値より小さい」というように区間で推定する必要が生じることもある. 区間推定を行うには, 観測したデータの関数である(9.37)式の T の分布を求めることが必要になる.

タイプⅡの中途打ち切りデータによる MTBF の区間推定は，統計量 2T/MTBF が自由度 2r の  $ \chi^{2} $ 分布に従うことから，図 9.3.3 に示すように，左右の

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//8328fe90-204a-4937-b5d0-738f915b399a/markdown_0/imgs/img_in_image_box_65_946_766_1453.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F769874cb63ee72b2b8c60fa5f056a4eefa5649a546218a5115fa20bfda4d719c" alt="Image" width="58%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.3.3 MTBF の区間推定の考え方</div> </div>


α/2 の面積をカットして真ん中の 1-α の面積を考慮すれば,

 $$ P\left[\chi^{2}(2r;1-\alpha/2)<\frac{2T}{MTBF}<\chi^{2}(2r;\alpha/2)\right]=1-\alpha $$ 

を得る．ここで，$\chi^{2}(\nu;\alpha)$は自由度$\nu$の$\chi^{2}$分布の上側$\alpha$点であり，付表9.1(p.446)より求めることができる．

左边中括弧の中の不等式を MTBF についての表現に書き直すと, 以下のようになる.

 $$ \frac{2T}{\chi^{2}(2r;\alpha/2)}<\mathrm{MTBF}<\frac{2T}{\chi^{2}(2r;1-\alpha/2)} $$ 

したがって，信頼率1-αのMTBFの信頼下限と信頼上限は，それぞれ

 $$ \begin{aligned}MTBF_{L}&=\frac{2T}{\chi^{2}(2r;\alpha/2)}\\&=\frac{T}{r}\times\frac{2r}{\chi^{2}(2r;\alpha/2)}\end{aligned} $$ 

 $$ \begin{aligned}MTBF_{U}&=\frac{2T}{\chi^{2}(2r;1-\alpha/2)}\\&=\frac{T}{r}\times\frac{2r}{\chi^{2}(2r;1-\alpha/2)}\end{aligned} $$ 

となる。

以上のことから，指数分布の場合，信頼率1-αのMTBFの区間推定は表9.3.1のように整理できる．ただし，タイプⅠの中途打ち切りデータの場合は近似的な方法であることに注意する必要がある．なお，完全データの場合は，タイプⅡ打ち切りデータでr=nと考えればよい．

信頼度 1−α の MTBF の信頼上限と信頼下限から, 時間 t における信頼度  $ R(t) $ の両側信頼限界は,

 $$ R\left(t\right)_{U}=\exp\left(-\frac{t}{\mathrm{MTBF}_{U}}\right) $$ 

<div style="text-align: center;"><div style="text-align: center;">表 9.3.1 指数分布における MTBF の区間推定(信頼率 1−α)</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>中途打ち切りのタイプ信頼限界</td><td style='text-align: center; word-wrap: break-word;'>タイプⅠ打ち切り（近似的な方法）</td><td style='text-align: center; word-wrap: break-word;'>タイプⅡ打ち切り</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>信頼上限</td><td style='text-align: center; word-wrap: break-word;'>$ \frac{2T}{\chi^{2}(2r;1-\alpha/2)} $</td><td style='text-align: center; word-wrap: break-word;'>$ \frac{2T}{\chi^{2}(2r;1-\alpha/2)} $</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>信頼下限</td><td style='text-align: center; word-wrap: break-word;'>$ \frac{2T}{\chi^{2}[2(r+1);\alpha/2]} $</td><td style='text-align: center; word-wrap: break-word;'>$ \frac{2T}{\chi^{2}(2r;\alpha/2)} $</td></tr></table>

 $$ R(t)_{L}=\exp\left(-\frac{t}{\mathrm{MTBF}_{L}}\right) $$ 

と求めればよい。

##### 【例题 9.3.1】指数分布に従うシステムの信頼性データの解析

6台のシステムについて,  $ r = 4 $ のタイプⅡ中途打ち切りにより故障データ,

40. 360, 490, 990 （時間）

が観測されている．このシステムの信頼率90％のMTBFの区間推定を行え．ただし，寿命分布は指数分布とせよ．また，このシステムの使命時間を250時間として，信頼率90％の信頼度の区間推定を行え．

【解】

$n=6,\ r=4$ で, 総試験時間 $T$ は,

 $$ \begin{aligned}T&=40+360+490+990+2\times990\\&=3,920( 時間 )\end{aligned} $$ 

より，MTBF の点推定値は，

 $$ \begin{aligned}\widehat{MTBF}&=\frac{T}{r}\\&=3.820/4=955( 時間 )\end{aligned} $$ 

となる. よって, MTBF の信頼率 90% の信頼上限と下限は, それぞれ.

 $$ \begin{aligned}MTBF_{U}&=\frac{2T}{\chi^{2}(2r;1-\alpha/2)}\\&=\frac{2\times3.820}{2.73}=2.799( 時間 )\end{aligned} $$ 

 $$ \begin{aligned}MTBF_{L}&=\frac{2T}{\chi^{2}(2r;\alpha/2)}\\&=\frac{2\times3,820}{15.51}=493( 時間 )\end{aligned} $$ 

となる。

250時間における信頼率90％の信頼度の信頼上限と下限は，それぞれ，

 $$ R\left(250\right)_{U}=\exp\left(-\frac{250}{MTBF_{U}}\right)=91.5\left(\%\right) $$ 

 $$ R\left(250\right)_{L}=\exp\left(-\frac{250}{MTBF_{L}}\right)=60.2(\%) $$ 

となる。

##### 2）MTBF の統計的仮説検定

故障対策や設計改善により MTBF の改善が実現しているかどうかを，改善方策実施後の故障データに基づき検証する方法について考えてみる．これは統計的仮説検定といわれ，検証の対象となる仮説の表現方法に特徴があり，検証の誤報の確率に相当する有意水準(第一種の誤りの確率)αに基づいて仮説の棄却の可否を判断する．

#### ① 統計的仮説検定における仮説の表現と統計量

従来 MTBF が 1,500 時間で偶発故障の設備について，改良保全する措置を行った．改善の効果があったかどうかを検証することを考えてみよう．

統計的仮説検定では，検証対象となる仮説を対立仮説といい，対立仮説を否定した仮説を帰無仮説ということから，それぞれ，

• 对立仮說  $ H_{1} $ : MTBF > 400 (時間)

#### • 掃無仮說  $ H_0 : MTBF \leq 400 $ (時間)

となる．「帰無仮説が正しいと仮定し，この仮定がデータと論理的に矛盾する」と判断される場合には帰無仮説を棄却して対立仮説を採択する．このような婉曲的な方法を採用するねらいは，間違って対立仮説が正しいと判断する確率である有意水準αを前もって明らかにするためである．

具体的には，以下のように考えていく．対立仮説を間違って正しいと判断する確率は．

掃無仮說  $ H_{0}:MTBF = 400 $ (時間) =  $ MTBF_{0} $

のとき最大となる．したがって，帰無仮説としてはMTBF＝MTBF₀と考えてよい．n個のサンプルについてr個の故障まで観測するタイプⅡの中途打ち切りでは，MTBFに関する仮説検定の統計量として，

 $$ T=\sum_{i=1}^{r}t_{(i)}+(n-r)t_{(r)} $$ 

を用いることができ，MTBF = MTBF₀のとき統計量，

 $$ \chi_{0}^{2}=2T/MTBF_{0} $$ 

が自由度  $ 2r $ の  $ \chi^{2} $ 分布に従う.

##### ② 仮説検定における棄却域の設定

帰無仮説の棄却域は有意水準αに基づき設定する．統計量χ₀²の値は，MTBFが改善されていれば分子2Tは大きく，分母は実際のMTBFの値より小さいMTBF₀を想定しているので，大きな値を取りうる．したがって，χ₀²が大きな値をとれば帰無仮説を棄却した方が合理的である．有意水準がαであるから，

 $$ P\left[\chi^{2}(2r;\alpha)\leq\frac{2T}{MTBF}\right]=\alpha $$ 

となるように棄却限界$\chi^{2}(2r;\alpha)$を定めて，この値より$\chi_{0}^{2}=2T/MTBF_{0}$が大きければ帰無仮説を棄却することになる。

##### 【例题 9.3.2】システムの改良保全効果の確認

例题 9.3.1 のデータに基づいて，仮説，

• 歸無仮說  $ H_{0}:MTBF = 400 $ (時間)

• 对立仮說  $ H_{1} $ : MTBF > 400（時間）

を検定するとどうなるか。

【解】

仮説検定の統計量の値をデータから計算すると，

 $$ \chi_{0}^{2}=2T/MTBF_{0}=19.10 $$ 

となる．有意水準  $ \alpha = 0.05 $ として棄却限界の値を，付表 9.1(p.446) から求めると，

 $$ \chi^{2}(2r;\alpha)=\chi^{2}(8;0.05)=15.51 $$ 

となり，これを$\chi_{0}^{2}$と比較すると，$\chi_{0}^{2}>\chi^{2}(2r;\alpha)=\chi^{2}(8;0.05)$となるので，帰無仮説は棄却され対立仮説を採択する．改良保全による効果はあったということになる．

## (3) 指数分布による故障数の解析

1）取り替えのあるタイプⅠ打ち切りデータの解析

### ① 取り替えのあるタイプⅠ打ち切りとは

タイプⅠ打ち切りでは，図9.3.4に示すように，試験設備の有効的な活用を考え，故障したサンプルは新規のものと取り替える．そして一定時間 $ t_{0} $経過後試験を打ち切る場合がある．このような試験方式を取り替えのあるタイプⅠ打ち切りという．

#### ② 取り替えのあるタイプⅠ打ち切りデータとポアソン分布

取り替えのあるタイプⅠ打ち切りデータは，故障間隔が故障率λの指数分布に従う場合，一定時間(0, T)内の故障数Xはポアソン分布，

 $$ P(X=k)=\frac{(\lambda T)^{k}e^{-\lambda T}}{k!} $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//86c432cf-cde6-4de6-9eff-1f769acd21c6/markdown_1/imgs/img_in_image_box_92_195_421_541.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2Fbd9bac938132e8e5a04ba64253f25bcc8315f44636acdbd8018b0448c7ecdae6" alt="Image" width="27%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 取り替えのないタイプⅠ打ち切りデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//86c432cf-cde6-4de6-9eff-1f769acd21c6/markdown_1/imgs/img_in_image_box_465_197_766_541.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2Fc1ca0e05cc3d9f605643ddeb3f8f08a037c11d94b8bc4c9f95168a398e286799" alt="Image" width="25%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) 取り替えのあるタイプⅠ打ち切りデータ</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.4 取り替えのない場合とある場合のタイプⅠ打ち切りデータ</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//86c432cf-cde6-4de6-9eff-1f769acd21c6/markdown_1/imgs/img_in_image_box_67_683_796_813.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2Ff2ccf4f856a30511e79848d256cffc8cae2000b816359fd0377a3afa85405bc3" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.5 故障間隔と故障数の関係</div> </div>


に従う。

##### 【說明】

故障間隔 W が故障率  $ \lambda $ の指数分布に従っており，故障すればすぐに取り替えれば，区間  $ (0, T) $ における故障数 X が  $ k $ 以上となる確率は，図 9.3.5 に示すように，

 $$ P(X\geq k)=P(W_{1}+W_{2}+\cdots+W_{k}\leq T) $$ 

となる。

故障率λの指数分布に従う互いに独立な確率変数の$k$ 個の和$(W_{1}+W_{2}+\cdots+W_{k})$ の分布は9.1節(3)項で述べたように, パラメータ$k$ とλのガンマ分布になる. したがって,

 $$ \begin{aligned}P(X=k)&=P(X\geq k)-P(X\geq k+1)\\&=P(W_{1}+W_{2}+\cdots+W_{k}\leq T)-P(W_{1}+W_{2}+\cdots+W_{k+1}\leq T)\\&=\int_{0}^{T}\frac{1}{\Gamma(k)\lambda^{k}}t^{k-1}\exp(-\lambda t)dt\\&\quad-\int_{0}^{T}\frac{1}{\Gamma(k+1)\lambda^{k+1}}t^{(k+1)-1}\exp(-\lambda t)dt\quad(93.19)\\&=\frac{(\lambda T)^{k} e^{-\lambda T}}{k!}\\ \end{aligned} $$ 

となる。

ポアソン分布の累積確率,

 $$ P(x;\lambda T)=\sum_{k=0}^{x}\frac{(\lambda T)^{k}e^{-\lambda T}}{k!} $$ 

は，付図9.1(p.447)のソーンダイク曲線を用いて容易に求めることができる．例えば，λT=10.5の時，x=5までの累積確率は図9.3.6に示すように，横軸λTに10.5を取り，x=5の交点を左の方に水平に伸ばして縦軸P(x;λT)の値を読むと0.05となる．

③ 取り替えのあるタイプⅠ打ち切りデータの解析

取り替えのあるタイプⅠ打ち切りデータより, λは以下のように推定できる.

【点推定について】

λの点推定は，故障観測数 r を総試験時間 T で除して，

 $$ \hat{\lambda}=\frac{r}{T} $$ 

で求めることができる．これがλの最尤推定量にもなっていることは．(9.3.17)式をλの関数と考え  $ k = r $ とすれば，最大値を与える  $ \lambda $ が(9.3.21)式で与えられることからもわかる．

【区間推定について】

信頼率1-αのλの区間推定は，ソーンダイク曲線より以下の手順で求めら

 $$ P\left(x,\lambda T\right)=\sum_{k=0}^{x}\frac{e^{-\lambda T\left(\lambda T\right)^{k}}}{k!} $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//86c432cf-cde6-4de6-9eff-1f769acd21c6/markdown_3/imgs/img_in_image_box_90_197_746_797.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2F62e433ad0f7e5a9fe221fdde1edb9bc9cf79408599437ce44346d2310070ad29" alt="Image" width="55%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.6 ソーンダイク曲線からのポアゾン分布の累積確率の求め方</div> </div>


れる。

☑手順1：ソーンダイク曲線の縦軸  $ P(x; \lambda T) $ に  $ P = \alpha/2 $,  $ P = 1 - \alpha/2 $ の 2 点を取り、これらを、それぞれ  $ P_U $,  $ P_L $ とする.

▣ 手順 2 :  $ P_U $ から横軸に平行に引いた直線と  $ x = r $ の曲線及び  $ P_L $ から横軸に平行に引いた直線と  $ x = r - 1 $ の曲線との交点を，図 9.3.7 に示すように，それぞれ  $ (\lambda T)_U $， $ (\lambda T)_L $ とする.

▪手順3：信頼率1-αのλの信頼下限と上限は，それぞれ，

 $$ \begin{aligned}\lambda_{L}&=(\lambda T)_{L}/T\\\lambda_{U}&=(\lambda T)_{U}/T\end{aligned} $$ 

と求めることができる。

【說明】

信頼下限( $ \lambda T $)は， $ r $以上の故障が発生する確率が $ \alpha/2 $となるように，推定する．したがって， $ (r-1) $以下の確率が $ (1-\alpha/2) $となるように，すなわち，

 $$ P\left(x,\lambda T\right)=\sum_{k=0}^{x}\frac{e^{-\lambda T\left(\lambda T\right)^{k}}}{k!} $$ 

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//86c432cf-cde6-4de6-9eff-1f769acd21c6/markdown_4/imgs/img_in_image_box_122_197_832_792.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2F34e242bb50253f7f351294fa4441158e801c1185ab9bd030778a7e4c0b658e36" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.7 ソーンダイク曲線による1の区間推定</div> </div>


 $$ \begin{aligned}P(X\geq r)&=\sum_{k=r}^{\infty}\frac{\left[(\lambda T)_{L}\right]^{k}e^{-(\lambda T)_{L}}}{k!}\\&=1-P[r-1;(\lambda T)_{L}]=\frac{\alpha}{2}\Leftrightarrow P[r-1;(\lambda T)_{L}]=1-\frac{\alpha}{2}\end{aligned} $$ 

を満たすように信頼下限( $ \lambda T $)_Lを推定すればよい。

信頼上限( $ \lambda T $) $ _{U} $は， $ r $以下の故障が発生する確率が $ \alpha/2 $となるように推定する．したがって，

 $$ \begin{aligned}P(X\leq r)&=\sum_{k=0}^{r}\frac{\left[\left(\lambda T\right)_{U}\right]^{k}e^{-\left(\lambda T\right)_{U}}}{k!}\\&=P[r;\left(\lambda T\right)_{U}]=\frac{\alpha}{2}\end{aligned} $$ 

となるように，信頼上限( $ \lambda T $)を推定すればよい。

##### 【例題 9.3.3】修復可能なシステムの信頼性データの解析

あるシステムは修復可能で，寿命は指数分布に従っている．このシステム5台を，それぞれ900時間運用していたところ故障が2回観測された．修理時間は運用時間に含まれないとして，故障率λの点推定と信頼率1-α=0.90の区間推定を行え．

【解】

総運用時間 T は,

 $$ T=800\times5=4,000( 時間 ) $$ 

で．故障数 $r=2$ であるから． $\lambda$ の点推定は．

 $$ \hat{\lambda}=\frac{r}{T}=\frac{2}{4000}=0.0005\quad(1/ 時間 ) $$ 

となる。

λの区間推定は，以下のように求めることができる。

☑手順1：ソーンダイク曲線の縦軸  $ P(x; \lambda T) \subset P_U = \alpha/2 = 0.05,\ P_L = 1 - \alpha/2 = 0.95 $ の2点を取る.

▣ 手順 2 :  $ P_U = 0.05 $ から横軸に平行に引いた直線と  $ x = r = 2 $ の曲線, 及び  $ P_L $ から横軸に平行に引いた直線と  $ x = r - 1 = 1 $ の曲線との交点を読みとると, 図 9.3.8 に示すように, それぞれ,

 $$ \left(\lambda\;T\right)_{U}=6.30 $$ 

 $$ (\lambda T)_{L}=0.36 $$ 

となる。

▪手順3：よって，λの信頼下限と上限は，それぞれ，

 $$ \lambda_{L}=(\lambda T)_{L}/T=0.36/4,000=0.00009\quad(1/ 時間 ) $$ 

 $$ \lambda_{U}=(\lambda T)_{U}/T=6.30/4,000=0.0016\quad(1/ 時間 ) $$ 

と求めることができる。

##### 2）故障による取り替え数の予測への活用

故障間隔が指数分布の時，故障数の分布はポアソン分布になる知見を，故障

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//bac13b10-0592-43b0-94d7-7742dc4f1a1a/markdown_1/imgs/img_in_chart_box_107_194_820_798.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A30Z%2F-1%2F%2F4758822f23bf7e91de281824266a2398ffbe131665ff9856e983f77ce33d8ede" alt="Image" width="59%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図9.3.8 ソーンダイク曲線によるλの区間推定</div> </div>


に備えて前もって準備する予備品管理業務へ活用できる.

 $ \lambda T = 10.5 $ の時，故障発生回数  $ X $ が 5 回以下の確率は，

 $$ P(X\leq5)=\sum_{k=0}^{5}\frac{(10.5)^{k}e^{-10.5}}{k!}=0.05 $$ 

となる．これは予備品の数を5個準備した時には，5個で対応できる確率が5％であることを意味する．予備品が不足して取り寄せなければならない状況の発生する可能性が，95％になることを意味する．

このような状況を改善することを考えてみよう．「λT=10.5の時，故障発生数Xがx以下となる確率が0.9.5以上となる最小のxを求めよ？」には，どのように答えればよいか．

数学的には以下の不等式。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//bac13b10-0592-43b0-94d7-7742dc4f1a1a/markdown_2/imgs/img_in_chart_box_71_190_817_801.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A31Z%2F-1%2F%2F042e64906c4791d71abc46226ceaef41d76b01a77eff46df63f0896e6eeec74c" alt="Image" width="62%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 9.3.9 ソーンダイク曲線による予備品数の求め方</div> </div>


 $$ \begin{aligned}P(X\leq x)&=P(x;\lambda T=10.5)\\&=\sum_{k=0}^{x}\frac{(10.5)^{k}e^{-10.5}}{k!}\geq0.95\end{aligned} $$ 

 $$ \begin{aligned}P(X\leq x-1)&=P(x-1;\lambda T=10.5)\\&=\sum_{k=0}^{x-1}\frac{(10.5)^{k} e^{-10.5}}{k!}<0.95\end{aligned} $$ 

を満たす最小の整数である $x$ を求めることになる.

この不等式を数値解法で解くことは簡単なことではないが、ソーンダイク曲解を用いれば図9.3.9に示すように、即座に$x=15$と求めることができる。

付表 9.1  $ \chi^{2} $ 分布表：自由度  $ v $ と上側確率  $ a $ から  $ v^{\circ} $ 一セント  $ \chi^{2}(v, a) $ 点を求める数表

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//bac13b10-0592-43b0-94d7-7742dc4f1a1a/markdown_3/imgs/img_in_chart_box_322_246_711_460.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A31Z%2F-1%2F%2F5dc3aa878a5ede72a23855b778f6197da17af07521e7527c3e3802cfb46c4438" alt="Image" width="32%" /></div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//bac13b10-0592-43b0-94d7-7742dc4f1a1a/markdown_3/imgs/img_in_image_box_0_770_82_943.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A32Z%2F-1%2F%2F7cbb47e1e98e8fd755cb199a37ae3d9f01606897ee115d862703709e672db1a4" alt="Image" width="6%" /></div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>$ \alpha $</td><td style='text-align: center; word-wrap: break-word;'>.975</td><td style='text-align: center; word-wrap: break-word;'>.950</td><td style='text-align: center; word-wrap: break-word;'>.900</td><td style='text-align: center; word-wrap: break-word;'>.800</td><td style='text-align: center; word-wrap: break-word;'>.200</td><td style='text-align: center; word-wrap: break-word;'>.100</td><td style='text-align: center; word-wrap: break-word;'>.050</td><td style='text-align: center; word-wrap: break-word;'>.025</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>.03982069</td><td style='text-align: center; word-wrap: break-word;'>.0393214</td><td style='text-align: center; word-wrap: break-word;'>.0157908</td><td style='text-align: center; word-wrap: break-word;'>.0641848</td><td style='text-align: center; word-wrap: break-word;'>1.64237</td><td style='text-align: center; word-wrap: break-word;'>2.70554</td><td style='text-align: center; word-wrap: break-word;'>3.84146</td><td style='text-align: center; word-wrap: break-word;'>5.02389</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>.0506356</td><td style='text-align: center; word-wrap: break-word;'>.102587</td><td style='text-align: center; word-wrap: break-word;'>.210721</td><td style='text-align: center; word-wrap: break-word;'>.446287</td><td style='text-align: center; word-wrap: break-word;'>3.21888</td><td style='text-align: center; word-wrap: break-word;'>4.60517</td><td style='text-align: center; word-wrap: break-word;'>5.99146</td><td style='text-align: center; word-wrap: break-word;'>7.37776</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>.215795</td><td style='text-align: center; word-wrap: break-word;'>.351846</td><td style='text-align: center; word-wrap: break-word;'>.584374</td><td style='text-align: center; word-wrap: break-word;'>1.00517</td><td style='text-align: center; word-wrap: break-word;'>4.64163</td><td style='text-align: center; word-wrap: break-word;'>6.25139</td><td style='text-align: center; word-wrap: break-word;'>7.81473</td><td style='text-align: center; word-wrap: break-word;'>9.34840</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>.484419</td><td style='text-align: center; word-wrap: break-word;'>.710723</td><td style='text-align: center; word-wrap: break-word;'>1.06362</td><td style='text-align: center; word-wrap: break-word;'>1.64878</td><td style='text-align: center; word-wrap: break-word;'>5.98862</td><td style='text-align: center; word-wrap: break-word;'>7.77944</td><td style='text-align: center; word-wrap: break-word;'>9.48773</td><td style='text-align: center; word-wrap: break-word;'>11.1433</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>.831212</td><td style='text-align: center; word-wrap: break-word;'>1.14548</td><td style='text-align: center; word-wrap: break-word;'>1.61031</td><td style='text-align: center; word-wrap: break-word;'>2.34253</td><td style='text-align: center; word-wrap: break-word;'>7.28928</td><td style='text-align: center; word-wrap: break-word;'>9.23636</td><td style='text-align: center; word-wrap: break-word;'>11.0705</td><td style='text-align: center; word-wrap: break-word;'>12.8325</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>1.23734</td><td style='text-align: center; word-wrap: break-word;'>1.63538</td><td style='text-align: center; word-wrap: break-word;'>2.20413</td><td style='text-align: center; word-wrap: break-word;'>3.07009</td><td style='text-align: center; word-wrap: break-word;'>8.55806</td><td style='text-align: center; word-wrap: break-word;'>10.6446</td><td style='text-align: center; word-wrap: break-word;'>12.5916</td><td style='text-align: center; word-wrap: break-word;'>14.4494</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>1.68987</td><td style='text-align: center; word-wrap: break-word;'>2.16735</td><td style='text-align: center; word-wrap: break-word;'>2.83311</td><td style='text-align: center; word-wrap: break-word;'>3.82232</td><td style='text-align: center; word-wrap: break-word;'>9.80325</td><td style='text-align: center; word-wrap: break-word;'>12.0170</td><td style='text-align: center; word-wrap: break-word;'>14.0671</td><td style='text-align: center; word-wrap: break-word;'>16.0128</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>2.17973</td><td style='text-align: center; word-wrap: break-word;'>2.73264</td><td style='text-align: center; word-wrap: break-word;'>3.48954</td><td style='text-align: center; word-wrap: break-word;'>4.59357</td><td style='text-align: center; word-wrap: break-word;'>11.0301</td><td style='text-align: center; word-wrap: break-word;'>13.3616</td><td style='text-align: center; word-wrap: break-word;'>15.5073</td><td style='text-align: center; word-wrap: break-word;'>17.5345</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>2.70039</td><td style='text-align: center; word-wrap: break-word;'>3.32511</td><td style='text-align: center; word-wrap: break-word;'>4.16816</td><td style='text-align: center; word-wrap: break-word;'>5.38005</td><td style='text-align: center; word-wrap: break-word;'>12.2421</td><td style='text-align: center; word-wrap: break-word;'>14.6837</td><td style='text-align: center; word-wrap: break-word;'>16.9190</td><td style='text-align: center; word-wrap: break-word;'>19.0228</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>10</td><td style='text-align: center; word-wrap: break-word;'>3.24697</td><td style='text-align: center; word-wrap: break-word;'>3.94030</td><td style='text-align: center; word-wrap: break-word;'>4.86518</td><td style='text-align: center; word-wrap: break-word;'>6.17908</td><td style='text-align: center; word-wrap: break-word;'>13.4420</td><td style='text-align: center; word-wrap: break-word;'>15.9872</td><td style='text-align: center; word-wrap: break-word;'>18.3070</td><td style='text-align: center; word-wrap: break-word;'>20.4832</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>11</td><td style='text-align: center; word-wrap: break-word;'>3.81575</td><td style='text-align: center; word-wrap: break-word;'>4.57481</td><td style='text-align: center; word-wrap: break-word;'>5.57778</td><td style='text-align: center; word-wrap: break-word;'>6.98867</td><td style='text-align: center; word-wrap: break-word;'>14.6314</td><td style='text-align: center; word-wrap: break-word;'>17.2750</td><td style='text-align: center; word-wrap: break-word;'>19.6751</td><td style='text-align: center; word-wrap: break-word;'>21.9200</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>12</td><td style='text-align: center; word-wrap: break-word;'>4.40379</td><td style='text-align: center; word-wrap: break-word;'>5.22603</td><td style='text-align: center; word-wrap: break-word;'>6.30380</td><td style='text-align: center; word-wrap: break-word;'>7.80733</td><td style='text-align: center; word-wrap: break-word;'>15.8120</td><td style='text-align: center; word-wrap: break-word;'>18.5493</td><td style='text-align: center; word-wrap: break-word;'>21.0261</td><td style='text-align: center; word-wrap: break-word;'>23.3367</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>13</td><td style='text-align: center; word-wrap: break-word;'>5.00875</td><td style='text-align: center; word-wrap: break-word;'>5.89186</td><td style='text-align: center; word-wrap: break-word;'>7.04150</td><td style='text-align: center; word-wrap: break-word;'>8.63386</td><td style='text-align: center; word-wrap: break-word;'>16.9848</td><td style='text-align: center; word-wrap: break-word;'>19.8119</td><td style='text-align: center; word-wrap: break-word;'>22.3620</td><td style='text-align: center; word-wrap: break-word;'>24.7356</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>14</td><td style='text-align: center; word-wrap: break-word;'>5.62873</td><td style='text-align: center; word-wrap: break-word;'>6.57063</td><td style='text-align: center; word-wrap: break-word;'>7.78953</td><td style='text-align: center; word-wrap: break-word;'>9.46733</td><td style='text-align: center; word-wrap: break-word;'>18.1508</td><td style='text-align: center; word-wrap: break-word;'>21.0641</td><td style='text-align: center; word-wrap: break-word;'>23.6848</td><td style='text-align: center; word-wrap: break-word;'>26.1189</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>15</td><td style='text-align: center; word-wrap: break-word;'>6.26214</td><td style='text-align: center; word-wrap: break-word;'>7.26094</td><td style='text-align: center; word-wrap: break-word;'>8.54676</td><td style='text-align: center; word-wrap: break-word;'>10.3070</td><td style='text-align: center; word-wrap: break-word;'>19.3107</td><td style='text-align: center; word-wrap: break-word;'>22.3071</td><td style='text-align: center; word-wrap: break-word;'>24.9958</td><td style='text-align: center; word-wrap: break-word;'>27.4884</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>16</td><td style='text-align: center; word-wrap: break-word;'>6.90768</td><td style='text-align: center; word-wrap: break-word;'>7.96165</td><td style='text-align: center; word-wrap: break-word;'>9.31224</td><td style='text-align: center; word-wrap: break-word;'>11.1521</td><td style='text-align: center; word-wrap: break-word;'>20.4651</td><td style='text-align: center; word-wrap: break-word;'>23.5418</td><td style='text-align: center; word-wrap: break-word;'>26.2962</td><td style='text-align: center; word-wrap: break-word;'>28.8454</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>17</td><td style='text-align: center; word-wrap: break-word;'>7.56419</td><td style='text-align: center; word-wrap: break-word;'>8.67176</td><td style='text-align: center; word-wrap: break-word;'>10.0852</td><td style='text-align: center; word-wrap: break-word;'>12.0023</td><td style='text-align: center; word-wrap: break-word;'>21.6146</td><td style='text-align: center; word-wrap: break-word;'>24.7690</td><td style='text-align: center; word-wrap: break-word;'>27.5871</td><td style='text-align: center; word-wrap: break-word;'>30.1910</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>18</td><td style='text-align: center; word-wrap: break-word;'>8.23075</td><td style='text-align: center; word-wrap: break-word;'>9.39046</td><td style='text-align: center; word-wrap: break-word;'>10.8649</td><td style='text-align: center; word-wrap: break-word;'>12.8570</td><td style='text-align: center; word-wrap: break-word;'>22.7595</td><td style='text-align: center; word-wrap: break-word;'>25.9894</td><td style='text-align: center; word-wrap: break-word;'>28.8693</td><td style='text-align: center; word-wrap: break-word;'>31.5264</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>19</td><td style='text-align: center; word-wrap: break-word;'>8.90652</td><td style='text-align: center; word-wrap: break-word;'>10.1170</td><td style='text-align: center; word-wrap: break-word;'>11.6509</td><td style='text-align: center; word-wrap: break-word;'>13.7158</td><td style='text-align: center; word-wrap: break-word;'>23.9004</td><td style='text-align: center; word-wrap: break-word;'>27.2036</td><td style='text-align: center; word-wrap: break-word;'>30.1435</td><td style='text-align: center; word-wrap: break-word;'>32.8523</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>20</td><td style='text-align: center; word-wrap: break-word;'>9.59078</td><td style='text-align: center; word-wrap: break-word;'>10.8508</td><td style='text-align: center; word-wrap: break-word;'>12.4426</td><td style='text-align: center; word-wrap: break-word;'>14.5784</td><td style='text-align: center; word-wrap: break-word;'>25.0375</td><td style='text-align: center; word-wrap: break-word;'>28.4120</td><td style='text-align: center; word-wrap: break-word;'>31.4104</td><td style='text-align: center; word-wrap: break-word;'>34.1696</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>21</td><td style='text-align: center; word-wrap: break-word;'>10.2829</td><td style='text-align: center; word-wrap: break-word;'>11.5913</td><td style='text-align: center; word-wrap: break-word;'>13.2396</td><td style='text-align: center; word-wrap: break-word;'>15.4446</td><td style='text-align: center; word-wrap: break-word;'>26.1711</td><td style='text-align: center; word-wrap: break-word;'>29.6151</td><td style='text-align: center; word-wrap: break-word;'>32.6706</td><td style='text-align: center; word-wrap: break-word;'>35.4789</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>22</td><td style='text-align: center; word-wrap: break-word;'>10.9823</td><td style='text-align: center; word-wrap: break-word;'>12.3380</td><td style='text-align: center; word-wrap: break-word;'>14.0415</td><td style='text-align: center; word-wrap: break-word;'>16.3140</td><td style='text-align: center; word-wrap: break-word;'>27.3015</td><td style='text-align: center; word-wrap: break-word;'>30.8133</td><td style='text-align: center; word-wrap: break-word;'>33.9244</td><td style='text-align: center; word-wrap: break-word;'>36.7807</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>23</td><td style='text-align: center; word-wrap: break-word;'>11.6886</td><td style='text-align: center; word-wrap: break-word;'>13.0905</td><td style='text-align: center; word-wrap: break-word;'>14.8480</td><td style='text-align: center; word-wrap: break-word;'>17.1865</td><td style='text-align: center; word-wrap: break-word;'>28.4288</td><td style='text-align: center; word-wrap: break-word;'>32.0069</td><td style='text-align: center; word-wrap: break-word;'>35.1725</td><td style='text-align: center; word-wrap: break-word;'>38.0756</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>24</td><td style='text-align: center; word-wrap: break-word;'>12.4012</td><td style='text-align: center; word-wrap: break-word;'>13.8484</td><td style='text-align: center; word-wrap: break-word;'>15.6587</td><td style='text-align: center; word-wrap: break-word;'>18.0618</td><td style='text-align: center; word-wrap: break-word;'>29.5533</td><td style='text-align: center; word-wrap: break-word;'>33.1962</td><td style='text-align: center; word-wrap: break-word;'>36.4150</td><td style='text-align: center; word-wrap: break-word;'>39.3641</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>25</td><td style='text-align: center; word-wrap: break-word;'>13.1197</td><td style='text-align: center; word-wrap: break-word;'>14.6114</td><td style='text-align: center; word-wrap: break-word;'>16.4734</td><td style='text-align: center; word-wrap: break-word;'>18.9398</td><td style='text-align: center; word-wrap: break-word;'>30.6752</td><td style='text-align: center; word-wrap: break-word;'>34.3816</td><td style='text-align: center; word-wrap: break-word;'>37.6525</td><td style='text-align: center; word-wrap: break-word;'>40.6465</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>26</td><td style='text-align: center; word-wrap: break-word;'>13.8439</td><td style='text-align: center; word-wrap: break-word;'>15.3792</td><td style='text-align: center; word-wrap: break-word;'>17.2919</td><td style='text-align: center; word-wrap: break-word;'>19.8202</td><td style='text-align: center; word-wrap: break-word;'>31.7946</td><td style='text-align: center; word-wrap: break-word;'>35.5632</td><td style='text-align: center; word-wrap: break-word;'>38.8851</td><td style='text-align: center; word-wrap: break-word;'>41.9232</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>27</td><td style='text-align: center; word-wrap: break-word;'>14.5734</td><td style='text-align: center; word-wrap: break-word;'>16.1514</td><td style='text-align: center; word-wrap: break-word;'>18.1139</td><td style='text-align: center; word-wrap: break-word;'>20.7030</td><td style='text-align: center; word-wrap: break-word;'>32.9117</td><td style='text-align: center; word-wrap: break-word;'>36.7412</td><td style='text-align: center; word-wrap: break-word;'>40.1133</td><td style='text-align: center; word-wrap: break-word;'>43.1945</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>28</td><td style='text-align: center; word-wrap: break-word;'>15.3079</td><td style='text-align: center; word-wrap: break-word;'>16.9279</td><td style='text-align: center; word-wrap: break-word;'>18.9392</td><td style='text-align: center; word-wrap: break-word;'>21.5880</td><td style='text-align: center; word-wrap: break-word;'>34.0266</td><td style='text-align: center; word-wrap: break-word;'>37.9159</td><td style='text-align: center; word-wrap: break-word;'>41.3371</td><td style='text-align: center; word-wrap: break-word;'>44.4608</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>29</td><td style='text-align: center; word-wrap: break-word;'>16.0471</td><td style='text-align: center; word-wrap: break-word;'>17.7084</td><td style='text-align: center; word-wrap: break-word;'>19.7677</td><td style='text-align: center; word-wrap: break-word;'>22.4751</td><td style='text-align: center; word-wrap: break-word;'>35.1394</td><td style='text-align: center; word-wrap: break-word;'>39.0875</td><td style='text-align: center; word-wrap: break-word;'>42.5570</td><td style='text-align: center; word-wrap: break-word;'>45.7223</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>30</td><td style='text-align: center; word-wrap: break-word;'>16.7908</td><td style='text-align: center; word-wrap: break-word;'>18.4927</td><td style='text-align: center; word-wrap: break-word;'>20.5992</td><td style='text-align: center; word-wrap: break-word;'>23.3641</td><td style='text-align: center; word-wrap: break-word;'>36.2502</td><td style='text-align: center; word-wrap: break-word;'>40.2560</td><td style='text-align: center; word-wrap: break-word;'>43.7730</td><td style='text-align: center; word-wrap: break-word;'>46.9792</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>31</td><td style='text-align: center; word-wrap: break-word;'>17.5387</td><td style='text-align: center; word-wrap: break-word;'>19.2806</td><td style='text-align: center; word-wrap: break-word;'>21.4336</td><td style='text-align: center; word-wrap: break-word;'>24.2551</td><td style='text-align: center; word-wrap: break-word;'>37.3591</td><td style='text-align: center; word-wrap: break-word;'>41.4217</td><td style='text-align: center; word-wrap: break-word;'>44.9853</td><td style='text-align: center; word-wrap: break-word;'>48.2319</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>32</td><td style='text-align: center; word-wrap: break-word;'>18.2908</td><td style='text-align: center; word-wrap: break-word;'>20.0719</td><td style='text-align: center; word-wrap: break-word;'>22.2706</td><td style='text-align: center; word-wrap: break-word;'>25.1478</td><td style='text-align: center; word-wrap: break-word;'>38.4663</td><td style='text-align: center; word-wrap: break-word;'>42.5847</td><td style='text-align: center; word-wrap: break-word;'>46.1943</td><td style='text-align: center; word-wrap: break-word;'>49.4804</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>33</td><td style='text-align: center; word-wrap: break-word;'>19.0467</td><td style='text-align: center; word-wrap: break-word;'>20.8665</td><td style='text-align: center; word-wrap: break-word;'>23.1102</td><td style='text-align: center; word-wrap: break-word;'>26.0422</td><td style='text-align: center; word-wrap: break-word;'>39.5718</td><td style='text-align: center; word-wrap: break-word;'>43.7452</td><td style='text-align: center; word-wrap: break-word;'>47.3999</td><td style='text-align: center; word-wrap: break-word;'>50.7251</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>34</td><td style='text-align: center; word-wrap: break-word;'>19.8063</td><td style='text-align: center; word-wrap: break-word;'>21.6643</td><td style='text-align: center; word-wrap: break-word;'>23.9523</td><td style='text-align: center; word-wrap: break-word;'>26.9383</td><td style='text-align: center; word-wrap: break-word;'>40.6756</td><td style='text-align: center; word-wrap: break-word;'>44.9032</td><td style='text-align: center; word-wrap: break-word;'>48.6024</td><td style='text-align: center; word-wrap: break-word;'>51.9660</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>35</td><td style='text-align: center; word-wrap: break-word;'>20.5694</td><td style='text-align: center; word-wrap: break-word;'>22.4650</td><td style='text-align: center; word-wrap: break-word;'>24.7967</td><td style='text-align: center; word-wrap: break-word;'>27.8359</td><td style='text-align: center; word-wrap: break-word;'>41.7780</td><td style='text-align: center; word-wrap: break-word;'>46.0588</td><td style='text-align: center; word-wrap: break-word;'>49.8018</td><td style='text-align: center; word-wrap: break-word;'>53.2033</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>36</td><td style='text-align: center; word-wrap: break-word;'>21.3359</td><td style='text-align: center; word-wrap: break-word;'>23.2686</td><td style='text-align: center; word-wrap: break-word;'>25.6433</td><td style='text-align: center; word-wrap: break-word;'>28.7350</td><td style='text-align: center; word-wrap: break-word;'>42.8788</td><td style='text-align: center; word-wrap: break-word;'>47.2122</td><td style='text-align: center; word-wrap: break-word;'>50.9985</td><td style='text-align: center; word-wrap: break-word;'>54.4373</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>37</td><td style='text-align: center; word-wrap: break-word;'>22.1056</td><td style='text-align: center; word-wrap: break-word;'>24.0749</td><td style='text-align: center; word-wrap: break-word;'>26.4921</td><td style='text-align: center; word-wrap: break-word;'>29.6355</td><td style='text-align: center; word-wrap: break-word;'>43.9782</td><td style='text-align: center; word-wrap: break-word;'>48.3634</td><td style='text-align: center; word-wrap: break-word;'>52.1923</td><td style='text-align: center; word-wrap: break-word;'>55.6680</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>38</td><td style='text-align: center; word-wrap: break-word;'>22.8785</td><td style='text-align: center; word-wrap: break-word;'>24.8839</td><td style='text-align: center; word-wrap: break-word;'>27.3430</td><td style='text-align: center; word-wrap: break-word;'>30.5373</td><td style='text-align: center; word-wrap: break-word;'>45.0763</td><td style='text-align: center; word-wrap: break-word;'>49.5126</td><td style='text-align: center; word-wrap: break-word;'>53.3835</td><td style='text-align: center; word-wrap: break-word;'>56.8955</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>39</td><td style='text-align: center; word-wrap: break-word;'>23.6543</td><td style='text-align: center; word-wrap: break-word;'>25.6954</td><td style='text-align: center; word-wrap: break-word;'>28.1958</td><td style='text-align: center; word-wrap: break-word;'>31.4405</td><td style='text-align: center; word-wrap: break-word;'>46.1730</td><td style='text-align: center; word-wrap: break-word;'>50.6598</td><td style='text-align: center; word-wrap: break-word;'>54.5722</td><td style='text-align: center; word-wrap: break-word;'>58.1201</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>40</td><td style='text-align: center; word-wrap: break-word;'>24.4330</td><td style='text-align: center; word-wrap: break-word;'>26.5093</td><td style='text-align: center; word-wrap: break-word;'>29.0505</td><td style='text-align: center; word-wrap: break-word;'>32.3450</td><td style='text-align: center; word-wrap: break-word;'>47.2685</td><td style='text-align: center; word-wrap: break-word;'>51.8051</td><td style='text-align: center; word-wrap: break-word;'>55.7585</td><td style='text-align: center; word-wrap: break-word;'>59.3417</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>50</td><td style='text-align: center; word-wrap: break-word;'>32.3574</td><td style='text-align: center; word-wrap: break-word;'>34.7643</td><td style='text-align: center; word-wrap: break-word;'>37.6886</td><td style='text-align: center; word-wrap: break-word;'>41.4492</td><td style='text-align: center; word-wrap: break-word;'>58.1638</td><td style='text-align: center; word-wrap: break-word;'>63.1671</td><td style='text-align: center; word-wrap: break-word;'>67.5048</td><td style='text-align: center; word-wrap: break-word;'>71.4202</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>60</td><td style='text-align: center; word-wrap: break-word;'>40.4817</td><td style='text-align: center; word-wrap: break-word;'>43.1880</td><td style='text-align: center; word-wrap: break-word;'>46.4589</td><td style='text-align: center; word-wrap: break-word;'>50.6406</td><td style='text-align: center; word-wrap: break-word;'>68.9721</td><td style='text-align: center; word-wrap: break-word;'>74.3970</td><td style='text-align: center; word-wrap: break-word;'>79.0819</td><td style='text-align: center; word-wrap: break-word;'>83.2977</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>70</td><td style='text-align: center; word-wrap: break-word;'>48.7576</td><td style='text-align: center; word-wrap: break-word;'>51.7393</td><td style='text-align: center; word-wrap: break-word;'>55.3289</td><td style='text-align: center; word-wrap: break-word;'>59.8978</td><td style='text-align: center; word-wrap: break-word;'>79.7146</td><td style='text-align: center; word-wrap: break-word;'>85.5270</td><td style='text-align: center; word-wrap: break-word;'>90.5312</td><td style='text-align: center; word-wrap: break-word;'>95.0232</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>80</td><td style='text-align: center; word-wrap: break-word;'>57.1532</td><td style='text-align: center; word-wrap: break-word;'>60.3915</td><td style='text-align: center; word-wrap: break-word;'>64.2778</td><td style='text-align: center; word-wrap: break-word;'>69.2069</td><td style='text-align: center; word-wrap: break-word;'>90.4053</td><td style='text-align: center; word-wrap: break-word;'>96.5782</td><td style='text-align: center; word-wrap: break-word;'>101.879</td><td style='text-align: center; word-wrap: break-word;'>106.629</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>90</td><td style='text-align: center; word-wrap: break-word;'>65.6466</td><td style='text-align: center; word-wrap: break-word;'>69.1260</td><td style='text-align: center; word-wrap: break-word;'>73.2911</td><td style='text-align: center; word-wrap: break-word;'>78.5584</td><td style='text-align: center; word-wrap: break-word;'>101.054</td><td style='text-align: center; word-wrap: break-word;'>107.565</td><td style='text-align: center; word-wrap: break-word;'>113.145</td><td style='text-align: center; word-wrap: break-word;'>118.136</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>100</td><td style='text-align: center; word-wrap: break-word;'>74.2219</td><td style='text-align: center; word-wrap: break-word;'>77.9295</td><td style='text-align: center; word-wrap: break-word;'>82.3581</td><td style='text-align: center; word-wrap: break-word;'>87.9453</td><td style='text-align: center; word-wrap: break-word;'>111.667</td><td style='text-align: center; word-wrap: break-word;'>118.498</td><td style='text-align: center; word-wrap: break-word;'>124.342</td><td style='text-align: center; word-wrap: break-word;'>129.561</td></tr></table>

(出典) 山内二郎編(1977):『簡約統計數値表』, p. 10, 日本規格協会.

(出典)山内二郎編(1977):[簡約統計數値表],p.98,日本規格協会.

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//bac13b10-0592-43b0-94d7-7742dc4f1a1a/markdown_4/imgs/img_in_chart_box_66_322_853_1443.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A32Z%2F-1%2F%2F6cbdb8b867c1ae500cf87a5a43b497d3423fa75f1d3243906acb9a882ef10104" alt="Image" width="66%" /></div>


##### 付図 9.1 ソーンダイク曲線

## 第10章 故障メカニズムの 数理モデルとデータ解析

本章では，故障メカニズムの２つの数理モデル，

• 衝撃的なストレスで故障が生じるタイプ：ストレス・ストレングスモデル

・材料劣化や新たな物質の生成を伴う経年変化で故障が生じるタイプ：損傷の累積による故障モデルである Birnbaum-Saunders 分布

を考え，信頼性データ解析への応用について述べる．加えて，複数の故障原因や故障メカニズムを想定する場合の故障モデルについても検討し，競合リスクモデルについて述べる．

最後に，ソフトウェアの信頼性モデルについて述べる．想定外の入力により論理的に処理できなくなる状態が故障であると考えて，バグが発見されるまでの時間をモデル化するアプローチを解説する．

故障メカニズムのストレスを数理モデルに取り入れて得られる知見は，信頼性データ解析の精度向上に加え，設計検証や保全計画の立案に際しても有用である.

### 10.1 ストレス・ストレングスモデル

##### (1) 衝撃的なストレスによる故障のモデル化

衝撃的なストレスによる代表的な故障モデルが，ストレス・ストレングスモデルである．作用するストレスが許容される限界であるストレングスを上回れば故障が発生するという考え方である．応力など機械的なストレスが作用する場合であれば，脆性や延性破壊の故障メカニズムのモデル化になる．

発生ストレスを確率変数 X, ストレングスを確率変数 Y で示せば, 発生ストレスがストレングス以下で破壊による故障が発生しない確率, すわわち信頼度は,

 $$ R=P(Y>X) $$ 

となる。

発生ストレスとストレングスの分布関数を，それぞれ， $ F(x) $と $ G(y) $とすれば，

 $$ \begin{aligned}R&=P(Y>X)\\&=\int_{0}^{\infty}P(Y>X=x)P[X\in(x,\ x+dx)]\\&=\int_{0}^{\infty}[1-G(x)]dF(x)\end{aligned} $$ 

となる。

【例题 10.1.1】ストレス・ストレングスモデルの正規分布への適用

発生ストレス X が平均  $ \mu_x $ と分散  $ \sigma_x^2 $ の正規分布，ストレングス Y が平均  $ \mu_y $ と分散  $ \sigma_y^2 $ の正規分布に従っていれば，信頼度は，

 $$ \begin{aligned}R&=P(Y>X)\\&=P(Y-X>0)\\&=\int_{0}^{\infty}\frac{1}{\sqrt{2\pi}\sqrt{\sigma_{x}^{2}+\sigma_{y}^{2}}}\exp\Big\{-\frac{\left\lbrack t-\left(\mu_{y}-\mu_{x}\right)\right\rbrack^{2}}{2\left(\sigma_{x}^{2}+\sigma_{y}^{2}\right)}\Big\}dt\\&=\int_{\frac{\mu_{y}-\mu_{x}}{\sqrt{\sigma_{x}^{2}+\sigma_{y}^{2}}}^{\infty}}^{}\frac{1}{\sqrt{2\pi}}\exp\Big(-\frac{t^{2}}{2}\Big)dt\\&=\int_{-\infty}^{\frac{\mu_{x}-\mu_{t}}{\sqrt{\sigma_{x}^{2}+\sigma_{y}^{2}}}}\frac{1}{\sqrt{2\pi}}\exp\Big(-\frac{t^{2}}{2}\Big)dt\\&=\Phi\Big(\frac{\mu_{y}-\mu_{x}}{\sqrt{\sigma_{x}^{2}+\sigma_{y}^{2}}}\Big)\\&=\Phi\Big(\frac{\nu-1}{\sqrt{a^{2}v^{2}+b^{2}}}\Big)\\ \end{aligned} $$ 

となる。ここで，

 $$ \begin{aligned}&a=\sigma_{y}/\mu_{y},\;b=\sigma_{x}/\mu_{x},\;\nu=\mu_{y}/\mu_{x}\\ &\\ &\Phi\left(x\right)=\int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}\exp\left(-\frac{y^{2}}{2}\right)dy\\ \end{aligned} $$ 

である．信頼度は(10.1.2)式から，ストレングスとストレスそれぞれの変動係数a，bとνによって決まる．ストレングスとストレスの平均の比であるνを，安全率ということがある．

##### (2) 信頼性設計への応用

実際の設計において「強度設計」といっ言葉がよく使用されている。例えば耐震設計の問題については，「鉄筋の使用量が少なく，強度が低くて危ない」という報道がなされている。これは，強度の意味をよく理解しないで使用している典型的な例である。

設計でコントロールできるのは「発生応力」であって「強度」ではない。設計について一般的にいわれている強度の概念はあいまいである。設計では使用しない方が望ましい。強度は材料特性を表す際に使用される概念であり、ストレスと強度(ストレングス)という異なる概念を同じ次元で比較し、破壊するあ

るいは破壊しないと論じる際に使用すべきではない．「強度設計」の言葉から受ける「強度を設計する」という考え方が，耐震設計に見られる問題を引き起こす背景要因になっているとも考えられる．また，システム外部から加わる(コントロールできない)ストレスに対して，これを制約条件であると理解し，制約条件のマネジメントを進める考え方の共有が難しくなる．「鉄筋の使用量が少なく，強度が低くて危ない」をより適切に表現し直すと，「鉄筋の使用量が少ないために発生応力が高く，許容限界応力を超えることがあり危ない」ということになる．

ピアノ線やコンクリートなどの材料を引っ張り試験で破壊させる時の基礎データは，図10.1.1に示す応力—ひずみ曲線である．図10.1.1からもわかるように，さまざまな意味の限度や強さがある．また応力—ひずみ曲線は材料特性であり，構造や形状の設計諸元を定める設計によって変化するものではなく，同じ材料ならば不変である．設計者は応力—ひずみ曲線に基づいて許容される応力を指示することはできるが，強度そのものをコントロールすることはできな

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//aebbdb10-3e6a-4367-9b1a-42f3533f3189/markdown_3/imgs/img_in_image_box_143_880_913_1483.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F0dd6f854938b553f5d529a620a930f7d7e118891d86f64430a0a181e70f781c3" alt="Image" width="64%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.1.1 材料の応力—ひずみ曲線</div> </div>


い. 設計者がコントロールできるのは発生応力であり, そして, 許容限界内に発生応力が収まるように設計諸元を定めることが設計者のミッションである.

この考え方に基づいて，以降では，ストレスを発生ストレス，ストレングスを許容限界ストレスと呼ぶことにする．発生ストレスは外力等により変動するので分布としてとらえることになるが，許容限界ストレスは図面指示することが可能である．したがって，定数としてとらえることができる．

許容限界ストレスを材料特性に変換することが必要になるが，これは材料に関するJIS規格やデータベースを参照することで可能である．次元の異なる許容限界ストレスと材料強度の概念を混同しないことである．発生ストレスは使用条件により変わり，時間あるいは場所により変動するので分布を有することになる．設計の重要なミッションは，発生ストレスを解析して構造や形状を工夫することである．発生ストレスの解析結果からその最大値に対して適切な余裕を確保できるように，許容限界ストレスを指示する．許容限界ストレスを確保できるように材料選定を行うことになる．強度であるストレングスは設計できないという認識が重要である．配置設計，構造設計などによりコントロールできるのは発生ストレスである．

### 10.2 競合リスクモデル

製品や生産設備は，複数の部品から構成されるシステムである．構成要素である部品の故障がシステムの故障になるので，システムから見れば故障の原因となるリスクの種類が複数あることになる．このように複数のリスクの種類を考え，故障にいたるメカニズムをモデル化しているのが競合リスクモデルである．このモデルは，ランダム打ち切りデータが観測される背景を説明する理論的根拠を与える．設計改善等を行って，ある種類のリスクがゼロ化された時，信頼度がどのように改善され向上するか，定量的に予測する場合にも役立つ．

##### (1) 競合リスクモデルの定式化

k 個のリスクを  $ c_1 $,  $ c_2 $, …,  $ c_k $ とし,  $ c_j $ が単独で作用した時の故障までの時間を確率変数  $ X_j $ で表す.  $ c_1 $,  $ c_2 $, …,  $ c_k $ が同時に作用した時の故障までの時間  $ Z $ は, 図 10.2.1 に示すように,

 $$ Z=\min\left(X_{1},X_{2},\cdots,X_{k}\right) $$ 

で表される．故障原因$J$が$c_j$であることは$X_j$が最小値となる事象と同じであるので，

 $$ J=\left\{c_{j}\mid X_{j}\leq X_{i},\ i=1,\cdots,k\right\} $$ 

と書くことができる.

 $ X_1, X_2, \cdots, X_k $ の同時生存分布を，

 $$ \bar{F}(x_{1},x_{2},\cdots,x_{k})=P(X_{1}>x_{1},X_{2}>x_{2},\cdots,X_{k}>x_{k}) $$ 

とすれば、Zの生存分布である信頼度は、

 $$ \begin{aligned}\bar{G}(t)&=P(Z>t)\\&=P(X_{1}>t,X_{2}>t,\cdots,X_{k}>t)=Q(t,t,\cdots,t)\end{aligned} $$ 

となり，不信頼度は，

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//01f51310-1323-4650-89d1-8ffb12e68799/markdown_0/imgs/img_in_image_box_133_931_908_1485.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A50Z%2F-1%2F%2F176424f4554f427f02f14952f6b3a7211b9d10a1fda6890188e5e56ce2135ec1" alt="Image" width="65%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.2.1 競合リスクモデルの図解</div> </div>


 $$ G\left(t\right)=1-\bar{G}(t)=1-Q(t,t,\cdots,t) $$ 

となる。また、$c_{1}$ が故障原因となる確率は。

 $$ \begin{aligned}\dot{p}_{j}&=P(J=c_{j})\\&=P(X_{j}\leq X_{i},\ i=1,\cdots,k)\\&=\int_{0}^{\infty}P(t<X_{j}\leq t+dt,t\leq X_{i},\ i=1,\cdots,j-1,j+1,\cdots,k)\\&=\int_{0}^{\infty}\left[-\frac{\partial\overline{F}\left(t,\cdots,t,x_{i},t,\cdots,t\right)}{\partial x_{j}}\right]_{x_{i}=t}dt\\ \end{aligned} $$ 

となる。

さらに.  $ \lambda(t) $,  $ \lambda_{j}(t) $と  $ h_{j}(t) $を, それぞれ,

 $$ \lambda\left(t\right)=\lim\limits_{\Delta t\to0}P\left(t<Z\le t+\Delta t\left|Z\right|>t\right)/\Delta t $$ 

 $$ \lambda_{j}\left(t\right)=\lim_{\Delta t\rightarrow0}P\left(t<Z\leq t+\Delta t,J=c_{j}\left|Z\right>t\right)/\Delta t $$ 

 $$ h_{j}\left(t\right)=\lim_{\Delta t\rightarrow0}P\left(t<X_{j}\leq t+\Delta t|X_{j}>t\right)/\Delta t $$ 

と定義する．$\lambda(t)$は$k$個のリスクが同時に作用している時の故障率，$\lambda_{j}(t)$はリスク$c_{j}$が原因となる故障率，$h_{j}(t)$はリスク$c_{j}$のみが単独で作用した時の故障率である．したがって，$X_{1}$，$X_{2}$，…，$X_{k}$が連続な確率変数であれば，

 $$ \lambda\left(t\right)=\sum_{i=1}^{k}\lambda_{i}\left(t\right) $$ 

であり、さらに互いに独立な確率変数であれば、

 $$ \lambda_{j}(t)=h_{j}(t) $$ 

となる。

 $ Z $と $ J $が独立であるための必要十分条件は， $ p_j = P(J = j) $として $ F_j(t) $が.

 $$ F_{j}(t)=1-\exp[-p_{j}H(t)],\ j=1,2,\cdots,k $$ 

と表現できることである．これを累積ハザード関数  $ H_{j}(t) $ で表現すると．

 $$ H_{j}(t)=p_{j}H(t),\ j=1,2,\cdots,k $$ 

となる．この条件がすべてのリスク  $ c_{1}, c_{2}, \cdots, c_{k} $ で満たされる競合リスクモ

デルを，比例ハザードモデルと呼ぶ．比例ハザードモデルが適用できる場合は，故障時間と故障原因のデータを別個に収集しても情報の損失はないということになる．

【例题 10.2.1】形状パラメータが同一のワイブル分布に従っている場合の比例ハザードモデル

X₁, X₂, …, Xₖ が互いに独立で形状パラメータ m が同じで, 尺度パラメータが異なるワイブル分布,

 $$ F_{j}(t)=1-\exp\left\{-\left(\frac{t}{\eta_{j}}\right)^{m}\right\},\quad(0\leq t) $$ 

に従っている場合に比例ハザードモデルを適用すると，

 $$ H(t)=t^{m} $$ 

 $$ p_{j}=\frac{1}{\eta_{j}^{m}} $$ 

となる。

リスク要因が互いに独立であれば, ZとJの同時分布は,

 $$ \begin{aligned}G_{j}(t)&=P(Z\leq t,\ J=c_{j})\\&=\int_{0}^{t}P\{X_{j}\in(x,\ x+dx],\ X_{j}\leq X_{i},\ i=1,\ \cdots,\ k,\ i\neq j\}\\&=\int_{0}^{t}\prod_{i\neq j}\{1-F_{i}(x)\}dF_{j}(x)\\ \end{aligned} $$ 

と求めることができる。

##### (2) 競合リスクモデルが適用できる場

競合リスクモデルは，使用の場では摩耗や腐食など故障要因となる故障モードが複数想定されることがある，複数のリスク要因の下で観測されている故障データから，特定の故障要因に関する解析が必要となる，など以下に述べる状況などで活用できる.

・リスク要因が複数存在している場合の信頼度の解析に適用できる。構成要素をリスク要因と考えれば、直列システムの信頼度解析には直ちに応用することができる。

技術改善によりリスク要因のいくつかを解消できた時に、従前より改善する信頼度についての定量的な解析が可能である。

・故障までの時間と故障要因のデータ(Z, J)を, リスク要因のデータに読み替えることにより, リスク要因についての解析が可能である.

リスク要因 $c_{j}$ を故障要因から除くことができれば, 例えば. (10.2.1) 式の故障率 $\lambda(t)$ は,

 $$ \lambda\left(t\right)=\sum_{i=1}^{k}\lambda_{i}\left(t\right)-\lambda_{j}(t) $$ 

となり．$\lambda_{j}(t)$ だけ低減する．低減の効果を把握するには$\lambda_{j}(t)$ の推定が必要となる．この推定には，次項のランダム打ち切りデータの解析が必要となる．

##### (3) ランダム打ち切りデータの解析

Xを故障までの時間を表す確率変数として, その分布関数を  $ F(x) $ とする.

今, 故障を観測する時間が確率変数 Y により制限を受けて, X と Y の最小値.

 $$ Z=\min\left(X,Y\right),\ \delta=\left\{\begin{aligned}1,&X\leq Y の時 \\ 0,&X>Y の時 \end{aligned}\right. $$ 

が観測できる場合を考える．$\delta=1$ ならば故障データであり，$\delta=0$ ならばYによりXは打ち切られていることになる．図解すれば，図10.2.2のようになる．このように打ち切りが行われ，故障時間と故障原因が対になって観測されているデータ(Z, $\delta$)を，9.2節(3)項でも説明しているように，ランダム打ち切りデータという．

以降では，XとYは互いに独立であると仮定して，n個のデータ、

 $$ (t_{1},\delta_{1}),\quad(t_{2},\delta_{2}),\quad\cdots,\quad(t_{n},\delta_{n}) $$ 

が観測されているとして，Xの分布関数である$F(x)$を推定する方法について考える。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//01f51310-1323-4650-89d1-8ffb12e68799/markdown_4/imgs/img_in_image_box_80_194_817_447.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A54Z%2F-1%2F%2F3f7fe877fd7e766f99b12b9b8572f9ac6e7d55f016cb7664e05c49e9f47b05a0" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.2.2 ランダム打ち切りデータの構造の図解</div> </div>


##### 1）寿命分布  $ F(x) $ を仮定しない場合の解析

n 個のデータを小さい方から順に並べ, 実際に故障データが観測された時間を,

 $$ t_{1}^{*}<t_{2}^{*}<\cdots<t_{k}^{*} $$ 

として，時間 $t_i^*$ での故障数を $l_i(i=1,\cdots,k)$，区間 $(t_i^*, t_{i+1}^*]$ で故障の観測が打ち切られたサンプル数を $m_i(i=0,1,\cdots,k)$ とする。ここで，$t_0^*=0$，$t_{k+1}^*=\infty$ とする。この時，$P_i=P(X>t_i^*)$ は，

 $$ \hat{P}_{i}=\prod_{j=1}^{i}\frac{n_{j}-l_{j}}{n_{j}} $$ 

と推定できる. ここで.

 $$ n_{i}=n-\sum_{j=0}^{i-1}m_{j}-\sum_{j=1}^{i-1}l_{j} $$ 

である。

 $ P_i = P(X > t_i^*) $ が(10.2.5)式で求められることは,

 $$ \begin{aligned}P_{i}&=P(X>t_{i}^{*})\\&=P(X>t_{1}^{*})P(X>t_{2}^{*}|X>t_{1}^{*})\times\cdots\times P(X>t_{i}^{*}|X>t_{i-1}^{*})\end{aligned} $$ 

から，明らかであろう．すなわち，図10.2.3に示すように，時間$t^{*}$で故障していない確率を推定するということは，区間$(t_{0}^{*}, t_{1}^{*}]$で故障していない確率の推定値$(n_{1}-l_{1})/n_{1}$と区間$(t_{1}^{*}, t_{2}^{*}]$で故障していない確率の推定値$(n_{2}-l_{2})/n_{2}$…，そして区間$(t_{i-1}^{*}, t_{i}^{*}]$で故障していない確率の推定値$(n_{i}-l_{i})/n_{i}$の積となる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fd2ce16f-472a-411e-8a83-50ba30b70aab/markdown_0/imgs/img_in_image_box_85_193_814_458.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A37Z%2F-1%2F%2F5ae8609bd6af8e94b3139c1a775f20ed4d2ee6e2bbfec91de6c1049b496c619a" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.2.3 ランダム打ち切りデータの図解</div> </div>


## 2）寿命分布を仮定する場合の解析

XとYの分布関数をそれぞれ $F(t)$ と $U(t)$ ，密度関数をそれぞれ $f(t)$ と $u(t)$ として，$n$ 個のランダム打ち切りデータ，

 $$ (t_{1},\delta_{1}),(t_{2},\delta_{2}),\cdots,(t_{n},\delta_{n}) $$ 

を観測しているとする．この時の尤度関数$L$ は，$Z$ と $\delta$ の同時分布が，

 $$ P[Z\in(t,t+d t],\delta]=[f(t)\bar{U}(t)]^{\delta}[u(t)\bar{F}(t)]^{1-\delta}d t $$ 

で与えられることに注意すれば，

 $$ L=\prod_{i=1}^{n}[f(t_{i})\bar{U}(t_{i})]^{\delta_{i}}[u(t_{i})\bar{F}(t_{i})]^{1-\delta_{i}} $$ 

となる．この尤度関数を最大にするように分布関数のパラメータを推定すればよい．

### 10.3 確率過程による故障のモデル化と解析

材料劣化を伴うなど経年変化にかかわる故障メカニズムの代表的な数理モデルとして.

• Birbaum-Saunders 分布

・ポアソンショックモデルを考えてみよう。

##### (1) 疲労による故障のモデル化

##### 1）損傷が累積する考え方によるモデル化

疲労の故障メカニズムは，材料劣化に伴って許容限界応力が低下し，機能限界に対する余裕が減少して発生応力に耐えられなくなった時点で破損など故障が生じると考える．使用材料と発生ストレスの情報から破損などに至る疲労寿命を求めるモデルは，目標寿命に対する余裕を把握するニーズに応えることができるので，必要性は高い．

疲労による故障までの時間は，確率過程における初度到達時間(first passage time)に相当する．確率過程によるモデル化では，後述の図10.32(p.461)に示すように，許容限界応力を許容される損傷の限界値，材料の劣化を限界値に対する余裕の減少，として考える．許容される損傷の限界をW，ストレスが1回加わることによる材料の劣化を損傷として考えて，これを $ X_{i} $とすれば，疲労寿命Nは累積した損傷が限界値Wを超えるまでのストレス発生回数.

 $$ N=\min\Big(n\Big|\sum_{i=1}^{n}X_{i}>W\Big) $$ 

として求めることができる。

##### ２）マイナー則

疲労寿命を考慮した設計の評価でよく用いられるものに，マイナー則がある．これは，上記のモデル化で，損傷$X_i$と損傷の限界値$W$を定数と考えることにより導くことができる．マイナー則で疲労寿命を予測する基礎データは，単一のストレスが作用した場合のストレス$S$の大きさと，その時の寿命$N$の関係を示す図10.3.1の$S$-$N$線図である．

S-N線図より単一応力  $ S_i $ が繰り返し加わった場合の寿命が  $ N_i $ であるから.

 $$ N_{i}X_{i}=W $$ 

の関係が成立する．一つのサイクルで，複合応力(S₁, S₂, …, Sₖ)が作用し．それぞれの応力の作用した回数が(n₁, n₂, …, nₖ)となる場合を考えた時．寿命がつきるまでのサイクル数は以下のように求めることができる．図10.3.2に示

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fd2ce16f-472a-411e-8a83-50ba30b70aab/markdown_2/imgs/img_in_chart_box_192_190_655_579.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A39Z%2F-1%2F%2F559ccd3e2fa62fad350469dcca431ac1605f1743cd8c59258ec78c02a6ca4be8" alt="Image" width="38%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.3.1 S-N 線図の一例</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//fd2ce16f-472a-411e-8a83-50ba30b70aab/markdown_2/imgs/img_in_chart_box_133_665_712_1125.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A39Z%2F-1%2F%2F8fb1778a312408265b1da62fbfacd6fbd176506ed1aabdfd977ecd7f9ccbe617" alt="Image" width="48%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.3.2 損傷累積のモデルの図解</div> </div>


すように．応力 $S_{i}$ が作用すれば損傷 $W_{i}$ が線形に累積するので，複合応力 $(S_{1}, S_{2}, \cdots, S_{k})$ が $l$ サイクル作用した時に限界値 $W$ を超えたとすると，

 $$ \begin{aligned}&l(n_{1}X_{1}+n_{2}X_{2}+\cdots+n_{k}X_{k})=W\\ &\begin{aligned}\\ &\Rightarrow l\Big(n_{1}\frac{W}{N_{1}}+n_{2}\frac{W}{N_{2}}+\cdots+n_{k}\frac{W}{N_{k}}\Big)=W\\&\Rightarrow l\Big(\frac{n_{1}}{N_{1}}+\frac{n_{2}}{N_{2}}+\cdots+\frac{n_{k}}{N_{k}}\Big)=1\\ &\end{aligned}\\ \end{aligned} $$ 

の関係が成立する。これより、

 $$ \frac{ln_{1}}{N_{1}}+\frac{ln_{2}}{N_{2}}+\cdots+\frac{ln_{k}}{N_{k}}=1 $$ 

を導くことができて，(10.3.1)式をマイナー則と呼んでいる．1サイクルの時間(サイクルタイム)を単位に寿命を考えることより，限界値 W を超えるまでのサイクル数 l は，

 $$ l=1\Big/\Big(\frac{n_{1}}{N_{1}}+\frac{n_{2}}{N_{2}}+\cdots+\frac{n_{k}}{N_{k}}\Big) $$ 

となる．1サイクルで応力が作用する回数は $ (n_1+n_2+\cdots+n_k) $であるら．応力の作用する回数を1単位として限界値Wまでの寿命を考えると．

 $$ \left(n_{1}+n_{2}+\cdots+n_{k}\right)\Big/\left(\frac{n_{1}}{N_{1}}+\frac{n_{2}}{N_{2}}+\cdots+\frac{n_{k}}{N_{k}}\right) $$ 

となる。

## (2) Birnbaum-Saunders 分布

マイナー則を導いたモデルで，応力 S が作用した時に与える損傷の大きさが平均  $ \mu_0 $，分散  $ \sigma_0^2 $ の正規分布，

 $$ X_{i}\approx N(\mu_{0},\sigma_{0}^{2}) $$ 

に従うと仮定した場合を考える．応力 S が n 回作用した時の損傷の累積和  $ W_{n} = X_{1} + X_{2} + \cdots + X_{k} $ が限界値 W 以下である確率は，

 $$ \begin{aligned}P(W_{n}\leq W)&=P\Big(\frac{W_{n}-n\mu_{0}}{\sqrt{n}\sigma_{0}}\leq\frac{W-n\mu_{0}}{\sqrt{n}\sigma_{0}}\Big)\\&=\Phi\Big(\frac{W}{\sqrt{n}\sigma_{0}}-\frac{\sqrt{n}\mu_{0}}{\sigma_{0}}\Big)\end{aligned} $$ 

となる. ここで, Φ(x)は標準正規分布の分布関数であり, Φ(x) =  $ \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}e^{-\frac{y^2}{2}}dy $の意味である. これより, Tを(サイクル数を単位にした)故障までの寿命時間とすれば, Tの分布関数は近似的に,

 $$ \begin{aligned}F_{T}(t)&=P(T\leq t)\\&=P(W_{t}\geq W)\\&=P\Big(\frac{W_{t}-t\mu_{0}}{\sqrt{t}\sigma_{0}}\geq\frac{W-t\mu_{0}}{\sqrt{t}\sigma_{0}}\Big)\\&=1-\Phi\Big(\frac{W}{\sqrt{t}\sigma_{0}}-\frac{\sqrt{t}\mu_{0}}{\sigma_{0}}\Big)\\&=\Phi\Big(\frac{\mu_{0}\sqrt{t}}{\sigma_{0}}-\frac{W}{\sigma_{0}\sqrt{t}}\Big)\\ \end{aligned} $$ 

となる. これを Birnbaum-Saunders 分布と呼ぶ(詳しくは, Birnbaum Saunders $ ^{[1]} $を参照のこと).

##### (3) ポアソンショックモデル

k回ショックが作用すれば故障し，ショックが加わる時間間隔 Tがパラメータλの同じ指数分布に従う場合の故障までの時間を考える．このようなモデルは，ポアソンショックモデルと呼ばれる．k回ショックが作用するまでの時間を，図10.3.3に示すように  $ U_{k} $ とすれば，

 $$ U_{k}=T_{1}+T_{2}+\cdots+T_{k} $$ 

となる。この分布は、

 $$ \begin{aligned}F(t)&=P(U_{k}\leq t)=P\{T_{1}+T_{2}+\cdots+T_{k}\leq t\}\\&=\frac{1}{(k-1)!}\int_{0}^{\lambda t}x^{k-1}e^{-x}d x\end{aligned} $$ 

と求められ、ガンマ分布となる、密度関数は、

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//89442bd9-1550-4702-8632-43bb0c22af33/markdown_0/imgs/img_in_image_box_221_187_829_437.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F84961a378973b7507583255fd8b08900e5ef38843b29b6288bc399bb8a4cedfb" alt="Image" width="51%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.3.3 k 回ショックが作用すれば故障するモデルの故障までの時間  $ U_{k} $</div> </div>


 $$ f(t)=\lambda\frac{(\lambda t)^{k-1}}{(k-1)!}e^{-\lambda t} $$ 

である。

### 10.4 ソフトウェアの信頼性

##### (1) ソフトウェアの信頼性の考え方

1）入力ープログラムー出力のプロセスモデル

ハードウェアの故障には, 11.2 節で詳しく述べるように,

・衝撃的なストレスが作用する場合

・繰り返しストレスが作用して材料劣化を伴う場合

の２つのタイプがある．時間ｔまでに故障しない確率である信頼度Ｒ(ｔ)の意味は，材料劣化を伴う場合には，劣化速度により機能限界に至る時間(すなわち故障までの時間)が変化すると考えれば明確である．衝撃的なストレスが作用する場合には，ｔは時間というよりは作用するストレスの大きさの意味になる．

では，ソフトウェアの信頼性はどのように考えることができるのか．ソフトウェアは情報を一定の論理に従って処理する機能を有し，論理は材料のように劣化することはないので，個体差によって劣化速度が異なるということはない．また，大規模な情報システムでは一品生産であり，同じソフトウェアが繰

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//89442bd9-1550-4702-8632-43bb0c22af33/markdown_1/imgs/img_in_image_box_175_196_783_737.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F2ec9cefdd3743c7aba77e3721e8a927f1a34d80db6f725a29ac9a8dd096b0c46" alt="Image" width="51%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.4.1 ソフトウェアの信頼性の入力—プログラム—出力のプロセスモデル</div> </div>


り返して生産されることもない. 故障までの時間やランダム性はどのように説明できるのだろうか.

入力がソフトウェアのプログラム $p$ により変換され出力される，図 10.4.1 に示す入力一プログラム一出力のプロセスモデルで説明できる．入力によっては異常な出力になることがあり，図 10.4.1 では，入力集合 $I$ の部分集合 $I_{F}$ の要素が入力されて，時には異常な出力となることを示している．$I_{F}$ に対応する異常な出力の集合が $O_{F}$ である．

プログラムは，部分集合$I_F$に出会うと異常な出力となり故障の状況を示す．したがって，$I_F$に出会うまでが故障までの時間となる．入力空間に比較して$I_F$が非常に小さければ，出力の異常である故障はポアソン過程に従って発生する．すなわち，故障として顕在化するまでの時間は故障率λの指数分布．

 $$ f(t)=\lambda\exp(-\lambda t),\lambda>0,t\geq0 $$ 

になる。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//89442bd9-1550-4702-8632-43bb0c22af33/markdown_2/imgs/img_in_image_box_116_196_801_602.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A31Z%2F-1%2F%2F1198e0e5255f7b856c79fb200095e9f3e11321397b38b03266118c94abb1a93e" alt="Image" width="57%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.4.2 ソフトウェア開発プロセスのウォーターフォールモデル</div> </div>


##### 2）プログラムのテストによる信頼性成長の考え方

ソフトウェア開発プロセスのモデルの一つに，水が上からトに流れるようにステップが移る，図10.4.2に示すウォーターフォールモデルがある。V字モデルとして図示され，「要件定義」と「統合テスト」，「方式設計」と「結合テスト」，「詳細設計」と「単体テスト」がそれぞれ結びついて，各テストで対応する前のステップの妥当性を確認するというものである。このモデルから，上流工程の欠陥がプロジェクトの終盤まで発見できない場合には，手戻りに要する時間とコストが大きくなる。

ここでは，テストにより欠陥が修正され，ソフトウェアの信頼性が成長していく過程に着目する．詳細設計におけるプログラム設計とプログラミングについての単体テストにより，異常な出力があればこれが適正となるようにプログラムの修正が行われるので，異常な出力の集合  $ O_F $ に対応する入力の部分集合  $ I_F $ は時間とともに，図 10.4.3 のように変化する．今，i番目の故障に対応するプログラムの系列を  $ p(i) $，異常な出力となる入力の部分集合の系列を  $ I_F(i) $，対応する故障率を  $ \lambda(i) $ とする．この時，すべての  $ i \geq 2 $ について．

 $$ I_{F}(i-1)\supset I_{F}\;(i) $$ 

と考えられるので、故障率についても単調減少。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//89442bd9-1550-4702-8632-43bb0c22af33/markdown_3/imgs/img_in_image_box_70_189_829_469.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2F55a0bac6bded881abf3be19a2a3c96f8a5f649b047cee2255cfcfa9da3df31d7" alt="Image" width="63%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.4.3 プログラムテストによる信頼性成長のモデル</div> </div>


 $$ \lambda\left(i-1\right)\geq\lambda\left(i\right) $$ 

が成立する。

## (2) ソフトウェアの信頼性モデル

##### 1) JelinskiとMorandaの信頼性モデル

ソフトウェアの信頼性モデルの古典的なモデルは, JelinskiとMoranda $ ^{[4]} $である. JelinskiとMorandaは2つの仮定をおいている.

• 仮定1：故障率はプログラムに含まれるバグの数に比例して，比例定数を $ \phi $とする.

• 仮定 2：当初のプログラムのバグの数を N とし，故障のたびにバグは修正され 1 だけ減少する.

これらの仮定から， $  (i-1)  $回修正されたプログラムの故障率が，

 $$ \lambda\left(i\right)=\left(N-i+1\right)\phi $$ 

と表されるとした．したがって，$T_{i}$ を$(i-1)$番目と$i$番目の故障間隔とすれば，

 $$ \begin{aligned}F(t)&=P(T_{i}\leq t)\\&=1-\exp[-(N-i+1)\phi t]\end{aligned} $$ 

となる。

(i−1)番目のバグ発見までの時間間隔を,

 $$ t_{1},t_{2},\cdots,t_{i-1} $$ 

とすれば，故障率の変化は図10.4.4のようになる。

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//89442bd9-1550-4702-8632-43bb0c22af33/markdown_4/imgs/img_in_image_box_196_183_758_752.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2F80d540119ae460ee64014ab28e1781ec0a44324740dd86da972c3fdee7b68b9a" alt="Image" width="47%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.4.4 JelinskiとMorandaのモデルの故障率推移のグラフ</div> </div>


##### 2）LittlewoodとVerrall $ ^{[6]} $の信頼性モデル

Jelinski と Moranda のモデルをより一般的に拡張したモデルである. すなわち, Jelinski と Moranda はバグが除去されるたびに一定の値 $ \phi $だけ故障率が減少するとしているのを, 除去されるバグによっては故障率低減への寄与は変わることを考慮に入れてモデル化を行っている. 以下の３つの仮定をおいている.

• 仮定1：当初のプログラムのバグ数をN個として，バグjの故障率への寄与は確率変数Φjで表すことができ，これはバグによらず同一分布であるとする.

• 仮定 2：τ時間後に(i−1)番目の故障が発生し(i−1)個のバグが取り除かれたならば，その時点における故障率は，残存している(N−i+1)個のバグの寄与の和として，

 $$ \Lambda_{i}=\Phi_{1}+\Phi_{2}+\cdots+\Phi_{N-i+1} $$ 

で与えられる。

· 仮定 3 : τ = 0 (デバッグの開始時点) でΦj はガンマ分布.

 $$ f(\phi)=\frac{\phi^{\alpha-1}\exp\left(-\phi/\beta\right)}{\Gamma\left(\alpha\right)\beta^{\alpha}},\ \alpha>0,\beta>0,\phi>0 $$ 

に従う。

仮定3では, バグjの故障率への寄与の事前分布としてガンマ分布を仮定している. バグの発生状況によって, 故障率の事後分布は異なるモデルになっている. すなわち, (i−1)番目のバグ発見までの時間間隔を,

 $$ t_{1},t_{2},\cdots,t_{i-1} $$ 

とすると， $  (i-1)  $番目のi番目のバグの発見される時間間隔 $  T_i  $の分布は，

 $$ h\left(t\right|\alpha,\beta)=\frac{\left(N-i+1\right)\alpha\Big(\beta^{-1}+\sum_{j=1}^{i-1}t_{j}\right)^{\left(N-i+t\right)\alpha}}{\Big(\beta^{-1}+\sum_{j=1}^{i-1}t_{j}+t\Big)^{\left(N-i+t\right)\alpha}} $$ 

となる．これはパレート分布の密度関数であり，$T_{i}$ の信頼度，故障率はそれぞれ．

 $$ R\left(t\mid\alpha,\beta\right)=\left(\frac{\beta^{-1}+\sum_{j=1}^{i-1}t_{j}}{\beta^{-1}+\sum_{j=1}^{i-1}t_{j}+t}\right)^{\left(N-i+1\right)\alpha} $$ 

 $$ \lambda\left(t\mid\alpha,\beta\right)=\frac{\left(N-i+1\right)\alpha}{\beta^{-1}+\sum_{j=1}^{i-1}t_{j}+t} $$ 

になる。

故障率のグラフは，図10.4.5のようになる．JelinskiとMorandaのモデルと異なって，バグが発見される間の時間でも故障率は減少している．また，αβ=φ(一定)としてα→∞，β→0とするとJelinskiとMorandaのモデルと一致するので，彼らのモデルの拡張になっていることがわかる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//48091178-2b37-4c59-bff1-748bb960ab1e/markdown_1/imgs/img_in_chart_box_174_182_852_795.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A30Z%2F-1%2F%2F67acaf29a4fd33851c72efaa57724902a5cbcb16a0ce600c1942e3a8845eeee6" alt="Image" width="56%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図 10.4.5 LittlewoodとVerrallのモデルの故障率推移のグラフ</div> </div>


# 第Ⅲ部 演習問題

問題1 次のデータは, ある機械部品の20個の試作品について行った寿命試験のデータである. これについてワイブル型確率紙を用いて,  $ m $とMTTFの推定を行ってみよ.

20.1. 8.5. 4.2. 2.0. 13.2. 8.2. 6.1. 13.5. 8.4. 6.8. 8.2. 11.3.

3.9. 6.2. 13.5. 18.2. 10.1. 3.8. 12.6. 5.2 (100 時間単位)

問題2 ある機械部品5個を寿命試験して, 次の故障データを得た. ワイブル解析をして, mとMTTF及びB_{10}ライフを求めよ.

11.1. 19.4. 5.3. 14.4. 9.1 (100 時間単位)

問題3 問題1の機械部品について, 使命時間は60時間であるという. この時, この機械部品の信頼度はいくらと推定できるか.

また、この機械部品を5個使用している直列システムの信頼度はどのようになるか。

問題4 ある機械系部品について大きさ n=10 の標本を試作して, 打ち切り時間が 200 時間のタイプ I 打ち切り寿命試験を行ったデータを以下に示す. このデータについてワイブル解析を行い, m と MTTF 及び B_{10} ライフを求めよ.

39. 72. 102. 130. 164（時間）

問題5 次のデータは, あるスプリング製品の寿命データである. これについて, 次の問いに答えよ.

5.5, 3.6, 2.5, 1.7, 6.9, 4.7, 7.8, 2.3, 3.3, 4.6, 5.1, 3.8 (単位  $ 10^{4} $ 回)

(1) このデータをワイプル型確率紙に打点し,  $ m $ と MTTF を推定せよ.

(2) この直線に対して，信頼率80%の信頼区間を作れ(ヒント：表9.2.2のメジアンランク表より，括弧で囲んでいる数字の上の数値は10%ランク，下の数字は90%

ランクになっている。故障順位に対応する10%ランクと90%ランクの数値を承み、打点して曲線を当てはめることによって、信頼率80%の信頼区間を作ることができる）。

(3) このスプリングは使用要求上, 2万回の繰り返しに耐えることが必要とされて、

る. 信頼度の信頼率90%の信頼下限を求めよ.

問題6 今，問題1と同一の機械部品を改善し，次のようなデータを得たとう。この改善は有効であったといるか。

25.2, 38.2, 41.3, 13.0, 18.2, 23.5, 28.1, 18.3, 13.7, 9.2,

18.0, 30.0 (100時間単位)

問題7 次のデータは, ある電子部品の故障データである. データの総数は 40 であるが, このうち 33 個が初期故障, 7 個が摩耗故障であるという. この故障データについて, m と MTTF 及び  $ \gamma $ (位置パラメータ) を求めよ.

162 180 197 220 241 256 283 (100 時間単位)

16.2. 18.0. 19.7. 22.0. 24.1. 25.6. 28.3 (100 時間単位)

問題8 大きさ $n=10$ の標本について, 試験を行ったデータを表 A に示す.

印は故障前に中途打切りしたもので, ×印は故障した寿命時間を示している. このデータについてワイブル解析を行い, $m$ と MTTF 及び B$_{10}$ ライフを求めよ.

<div style="text-align: center;"><div style="text-align: center;">表 A 寿命試験により得られたデータ</div> </div>




<table border=1 style='margin: auto; word-wrap: break-word;'><tr><td style='text-align: center; word-wrap: break-word;'>资料No</td><td style='text-align: center; word-wrap: break-word;'>1</td><td style='text-align: center; word-wrap: break-word;'>2</td><td style='text-align: center; word-wrap: break-word;'>3</td><td style='text-align: center; word-wrap: break-word;'>4</td><td style='text-align: center; word-wrap: break-word;'>5</td><td style='text-align: center; word-wrap: break-word;'>6</td><td style='text-align: center; word-wrap: break-word;'>7</td><td style='text-align: center; word-wrap: break-word;'>8</td><td style='text-align: center; word-wrap: break-word;'>9</td><td style='text-align: center; word-wrap: break-word;'>10</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>データ</td><td style='text-align: center; word-wrap: break-word;'>5.0</td><td style='text-align: center; word-wrap: break-word;'>10.8</td><td style='text-align: center; word-wrap: break-word;'>16.1</td><td style='text-align: center; word-wrap: break-word;'>19.4</td><td style='text-align: center; word-wrap: break-word;'>21.3</td><td style='text-align: center; word-wrap: break-word;'>25.2</td><td style='text-align: center; word-wrap: break-word;'>35.9</td><td style='text-align: center; word-wrap: break-word;'>39.8</td><td style='text-align: center; word-wrap: break-word;'>40.4</td><td style='text-align: center; word-wrap: break-word;'>42.1</td></tr><tr><td style='text-align: center; word-wrap: break-word;'>備考</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>☐</td><td style='text-align: center; word-wrap: break-word;'>✗</td><td style='text-align: center; word-wrap: break-word;'>☐</td></tr></table>

(100 時間単位

問題9 次のデータは, ある工場の機械 10 台を一定期間(暦時間)追跡調査し時, 初めて故障が生じるまでの時間を実稼働時間で集計したものである. ただし データの*印は, 追跡調査期間内に故障が観測されなかったことを示している. このデータについて ワイプル解析を行い,  $ m $とMTTF及び $ B_{10} $ライフを求めよ.

2.1. 4.0. 6.6. 9.4. 15.0. 20.0. 3.3*. 7.0*. 10.0*. 11.0*. (100時間単位)

問題10 ある標準材料の寿命は，標準荷重の下で  $ m=6.0\ \eta_{1}=1,000 $（時間）のワイプル分布に従っていることがわかっている．このたびB社で新材料を開発したところ，寿命が2倍伸び， $ \eta_{0}=2,000 $（時間）になることが予測された．形状母数 $ m $を不変として，新しい材料が従来の材料の寿命と同一か，それとも2倍であるかを逐次確率比試験により調べることになった．以下の問に答えよ．

(1) 1回目のデータは， $ t_{1}=1,400 $（時間）であった．このデータに基づき，寿命が2倍になったと判断できるか否か，根拠を明確にして結論を述べよ．

(2) もし, 2 回目のデータを収集して  $ t_{2}=2600 $ (時間) であれば, 結論はどのようになるか. なお, (1), (2) の仮説検定では,  $ \alpha=0.05 $,  $ \beta=0.05 $ とせよ.

問題11 故障パターンがCFR型である装置が一つ使用されている．装置は故障すると直ちに修理されて運用を再開する．この装置について，故障が6件発生した時点で運用を打ち切った．最後の故障発生時点は4,900時間であった．以下の問に答えよ．

(1) MTBF と故障率  $ \lambda $ の点推定を行え.

(2) MTBF の信頼率 90% の区間推定を行え.

問題12 ある加工設備は，故障パターンが偶発故障であることが明らかになっている．加工設備は故障すると直ちに修理され，稼働を再開する使い方をしている．14,000時間稼働したところ，故障が9件発生した．以下の問に答えよ．

(1) 故障率λと MTBF の点推定値を求めよ.

(2) MTBF の区間推定を行い, 信頼率 1−α=0.80 の信頼下限及び信頼上限を求めよ.

(3) この加工設備を10,000時間稼働した時の故障件数が10件以下である確率はいくらか.

(4) 故障件数が10件以下の故障確率を0.99以上(故障件数が11件以上の確率が0.01以下)にするためには，MTBFをどの程度改善する必要があるか。

##### 第Ⅱ部 参考文献

[1] Birnbaum, Z. W. and Saunders, S. C.(1969) "A New Family of Life Distributions"

J. of Applied Probability. Vol. 6, pp. 319–347.

[2] Castillo, E(1997) : Extreme Value Theory in Engineering, Academic Press. INC.

[3] Drenick, R. F.(1960) "The Failure Law of Complex System", J. Soc. Indust. Appl. Math., Vol. 8, No. 4, pp. 680-689.

[4] Jerinski, Z and Moranda, P. B.(1972) "Software Reliability Research" (in Statistical Computer Performance Evaluation Ed. W. Freiberger), Academic Press, pp. 465-484.

[5] 日本溶融亜鉛鍍金協会 HP, http://www.aen-mekki.or.jp

[6] Littlewood, B. and Verrall, J. V.(1981) "Likelihood Function of a Debugging Model for Computer Software Reliability", IEEE Transaction on Reliability. Vol. 30, pp. 145-148.

# 第Ⅳ部

# 信頼性手法の理論と活用(2) 一設計と計画における課題の発掘と解決一

設計・計画段階など源流で問題を作り込まないように，すぐに発見できるように仕事をデザインして実行する。この考え方を効率的・効果的に実現する方法論が，FMEA，FTA，デザインレビューである。

FMEA は，設計・計画に含まれる負の機能に着目してこれを故障モードとして顕在化し，問題解決のシステムに乗せる方法論である．機能を実現する作動原理と作用するストレスの知見と情報を活用して，負の機能を発見する思考プロセスに特徴がある．

FTAは，安全や故障モード等の問題が発生するメカニズムを俯瞰的視野でかつ論理的に検討を進めて，その結果を図解して表現する方法論である．全体性，操作性や保守性にすぐれた手法であり，原因究明を進める時に衆知を集めて良い仮説を提示できる．デザインレビューは，一人ひとりの限界を組織が補完して，俯瞰的・多面的に問題解決を進めるマネジメントツールである．情報的資源を技術標準やデータベースのみで共有・共用するには限界がある．多様な分野の専門技術者によるフェース・ツー・フェースによる情報的資源の移転が必要であり，良いコミュニケーションと議論の活性化を進める「出会いの場」を設定するマネジメントツールが，デザインレビューである．

## 第 11 章 FMEA(Failure Mode and Effects Analysis)

FMEA(Failure Mode and Effects Analysis，故障モードと影響解析)は，製品設計(設計のFMEA)，工程設計(工程のFMEA)など設計に起因する課題を出図前に明らかにし，設計の見直しや信頼性試験計画立案などへ活用して，市場や使用の段階での品質問題発生を防止する目的で活用する.

FMEA は，使用環境条件，機能を実現する原理・方式，作動状態の理解と可視化によるエネルギー，物質と情報の流れ，過去の市場や類似製品・工程で経験している品質情報など活用して，故障モードを明らかにする．さらに故障モードについて，発生頻度，影響度，検出難易等の評価項目を考慮して重要度を評価する．多面的に重要度を評価することで，想定外の事象についても損害の大きさを低減できる対応を可能としている．

機能レベルでの「構想設計のFMEA」により，技術方式選定での課題，「詳細設計のFMEA」で配置・構造に関する課題を明確にできる．関係部門間の情報共有のコミュニケーションとコラボレーションのシナジー効果を発揮すれば，開発期間の短縮とスピードアップになる．

FMEA による検討結果を図面に添付し，必要に応じてアクセスできるようにすれば，設計根拠について豊かなコミュニケーションができ，トレーサビリティと関係部署間の連携が良くなる.

### 11.1 FMEA の狙いと思考プロセス

## (1) 設計及び計画の完備化

FMEA は, 設計や計画段階で「引き算の考え方」により丁寧に仕事を進め, 設計や計画における負の出力を許容レベル以下に低減して, 技術的な検討不足で事後的に問題が発生することを防止する手法である. 製品設計だけでなく, 研究段階でのフェールセーフ機能の評価, 生産準備における設備や工程でのトラブル想定などを通して計画を完備化する場などとして, 活用の範囲は広い.

## 1)「設計の出力はソリューションである」という考え方

FMEA は新製品開発のハードウェア設計を対象として，見逃すと影響の大きい故障の是正措置を新製品開発の早い段階で実施し，図面や技術仕様書など設計の出力を完備化する目的で開発された手法である.

設計の出力は顧客要件に応えるソリューションであり，顧客から明示された要求を満たすには，1.2節で詳しく述べている「負の出力」についても「なきことを保証」する必要がある．この考え方は，ハードウェアの設計からソフトウェアさらに生産工程，業務の設計(計画)などへも適用できる．図面や仕様書，手順書などに潜在化している負の出力を，FMEAの思考プロセスで顕在化する．さらに，FMEAの結果をレビュー資料として活用すれば，思考プロセスの透明性が高まって，良いコミュニケーションと議論をもたらすことができる．

##### 2）ソリューションに潜在化している問題

ソリューションを生み出すプロセスでは，図11.1.1に示すように，顧客ニーズなどの情報を図面や計画書などへ知識・スキルなどを活用して変換・価値化して出力する．ソリューションには副作用など負の出力が含まれている場合があり，許容レベルへ低減する対策を講ずることが求められる．

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//0bbe29dd-4743-4a3f-a113-6f986db8cbc6/markdown_4/imgs/img_in_image_box_38_206_810_1004.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A32Z%2F-1%2F%2Fc82debf4eb23a9a2dabec52cb83bd1bd01e4d5cac177dadc76d7d3f2f568df47" alt="Image" width="64%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図11.1.1 仕事のプロセスモデルとソリューションを完備化するFMEAの機能</div> </div>


## 3）「負の機能」へ着目する多面的な思考

設計では要件を分析し，誤解の余地のない詳細レベルでの仕様を明らかにして，これを実現する方法を考える．例えば，質量 $m$ の岩を図 11.1.2(a) のように動かすテコを設計することを考えてみよう．テコに加える力 $F$ は所与の条件として検討する．テコを剛体として機械力学の考え方に基づき，岩とテコの接点を力の作用点，支柱はテコを支える支点の機能を果たすとして，テコの原理を考慮しテコの長さと支柱の位置を決める．

テコの材質，断面形状の設計では，テコの変形を考慮する．この場合には岩

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7dc9a6c8-9210-4503-98df-3540eeb90ff6/markdown_0/imgs/img_in_image_box_240_196_720_490.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A58Z%2F-1%2F%2F606f67e55dbfc9da85a73cfee9c02d9627df3b788a4277dd9afe025609d6bb8b" alt="Image" width="40%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 岩を動かすために必要な力を検討する時の見方と思考</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7dc9a6c8-9210-4503-98df-3540eeb90ff6/markdown_0/imgs/img_in_image_box_237_552_715_846.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A52%3A59Z%2F-1%2F%2Fce6b13d39aededf017982eb0e9855752a7a98e78f72f4fdd7979878988593d11" alt="Image" width="40%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(b) テコの材質，断面形状を設計する時の見方と思考</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図11.1.2 「岩を動かす」要件を満たすテコの設計における２つの思考</div> </div>


とテコの接点が支点となり，テコと支柱の接点が作用点となる．支柱は支点でもあり作用点でもあるということになる．変形を考慮する設計では，テコ内部に発生する応力を材料力学の知見に基づき解析する．具体的には，図11.1.2に示しているテコの作用点へ作用する発生曲げ応力を明らかにして，これと材質から決まる許容限界曲げ応力との比較を行い，曲げ(剛性)の限界に対して適切な余裕を確保できるようにテコの長さ，材質と断面形状を決める．

テコの設計という簡単な例からもわかるように，「岩を動かす」という正の機能はいうに及ばず，負の機能である「テコの変形や破壊」について考慮する必要がある．正から負の機能へ視点を変えると，図11.1.2に示しているように，作用点が支点，支点が作用点へとエネルギーである力の流れの見方が変化する．使用時に許容限界を超えた曲げ応力が発生しないように支点と作用点の

距離は長すぎてはいけない，岩を動かす時には支点となる支柱の位置が作用点である岩に近すぎてはいけないなど，「力の流れ」についての思考が必要となる。正に加え負の機能の二面的な考え方を取り入れた思考により，設計の最適化を進める。

4）「引き算の考え方」を取り入れ，微妙なバランスを取る仕事の進め方

FMEA の思考プロセスは，11.1 節(2)項で説明するように，

・システムや業務プロセスの複数の要素と階層構造に着目

・使用環境条件，顧客要件とこれを実現する原理・方式，構造などの情報からエネルギー，物質と情報の流れを可視化

・流れのローカルな変化を明らかにして，上位システムや他業務へのグローバルな影響(連鎖事象)を解析

する流れになる。

設計や計画を立案する仕事へ，ローカルな変化である「意図せざる負の機能（故障モード）」に着目してグローバルへの影響を考え，許容できるレベルまで負の機能の影響を低減する「引き算の考え方」を取り入れる．正の機能を果たすには必ずエネルギーが必要であり，これをコントロールできなくなると故障や安全へ負の連鎖が生じることがある．負の連鎖を低減するのが「引き算」であり，これを設計や計画段階で行うよう丁寧に仕事を進め，問題が事後に発生することがないように防止する．これには，図11.1.3に示すように，正と負の機能の2つの焦点を有する楕円の微妙なバランスを取る仕事の進め方が必要となり，負の機能を見落とさないようにするためには視点（テコの支点）を負の機能へ近づけて，変化を倍力することで発見する能力を高める．

引き算の考え方は一見すると婉曲的で隔靴掻痒の趣があり，回りくどく適用に躊躇するかもしれない．新しい技術に関心が高い設計者には，引き算は余分な仕事であると考えている人が多い．しかし，成功には必ず偶然が伴い．「こうそればうまくいく」という方向で考えるだけでは見落としが発生する．失敗には必然があるとの経験則から，必然性に着目して失敗を少なくして成功の確

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7dc9a6c8-9210-4503-98df-3540eeb90ff6/markdown_2/imgs/img_in_image_box_105_201_840_609.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A00Z%2F-1%2F%2F155295244ac563a3cf3954fa9805a277fae4c04bbdab24a14af9b4e911d71d66" alt="Image" width="61%" /></div>


<div style="text-align: center;"><div style="text-align: center;">図11.1.3 設計のミッションを果たすために重要なバランスの取り方</div> </div>


率を高める考え方も必要である。

見落としや想定外を少なくするには，やることではなく，やってはならないことをまず検証する。「やってはならないこと」は技術標準や失敗事例集に蓄積されているが，新たな問題が発生することがある。過去の失敗事例の学習が不十分で類似の失敗を繰り返す，学習成果の適用がまずい場合もある。状況や想定に変化があれば新たな解析を行って，設計や計画の考え方や原理・方式などについて俯瞰的な視野で多面的に吟味する。メリットに加えデメリットについても明らかにする思考プロセスが，失敗を少なくする王道である。

この思考プロセスを可視化し，論理的思考の結果を組織として共有できれば，変化への気づきと対応も早くなる．情報が共有されていれば，事後的に問題が発生しても状況に対する報告リスクが低くなり，迅速で確な措置により対応できる可能性が高くなる．

## (2) システムのアプローチによる俯瞰的な見方と多面的思考

1）システムのアプローチによる俯瞰的な見方

##### ① システム的な見方

自動車やテレビなどの製品は，複数の部品が組み立てられて作られている

<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7dc9a6c8-9210-4503-98df-3540eeb90ff6/markdown_3/imgs/img_in_image_box_45_190_838_455.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A01Z%2F-1%2F%2F452583f6e447a39127a24481e440242390b1d77dabb67cbdb9a7acdf9f573509" alt="Image" width="66%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(a) 製品の階層構造</div> </div>


<div style="text-align: center;"><div style="text-align: center;">(b) 生産工程の階層構造</div> </div>


<div style="text-align: center;"><img src="https://pplines-online.bj.bcebos.com/deploy/official/paddleocr/pp-ocr-vl-15//7dc9a6c8-9210-4503-98df-3540eeb90ff6/markdown_3/imgs/img_in_image_box_181_535_717_796.jpg?authorization=bce-auth-v1%2FALTAKDN8mY5KlNI7zaRpLmOqrw%2F2026-05-01T05%3A53%3A01Z%2F-1%2F%2Fca50be82761dbb7cffb57e64c3a83b4f40e5eb460800372adbf550b7ec1a8b74" alt="Image" width="45%" /></div>


<div style="text-align: center;"><div style="text-align: center;">(c) 業務の階層構造</div> </div>


<div style="text-align: center;"><div style="text-align: center;">図 11.1.4 製品，生産工程と業務の階層構造による可視化</div> </div>


加工や組み立ての工程も，成形や締結などの機能へとさらに小さい複数の単位工程へ分解できる階層構造を有している．新製品開発などの業務も製品企画，設計など複数の機能から成り立っている．

このように，製品と加工・組立工程，業務のいずれも，複数の機能を果たす要素から構成され，システムという見方ができる．システムは，図11.1.4に示すように，複数の要素から構成される階層構造を有し，それぞれの要素はミッションあるいは機能を有している．

### ② システム工学のアプローチと FMEA

6.1 節(1)項で述べているシステム工学のアプローチの3本柱は.

・モデル化とシミュレーション

##### ·評価

