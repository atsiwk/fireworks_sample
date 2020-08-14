/*

fireworks.push(new Firework(（開始位置）,（初速）, （花火の大きさ）, （花火の色）));
のように書くと花火が１つ打ち上がります。
２つ同時に打ち上げたい場合は２行書きます。

（開始位置）:キャンバスの中央から打ち上げたい場合 width/2
        ：均等に２つ打ち上げたい：width/3, 2*width/3,  の２種類つくる。
        ：均等に３つ打ち上げたい：width/4, 2*width/4, 3*width/4 の３種類つくる。

（初速）：キャンバスのサイズによりますが、今のサイズの場合 -6〜-12 くらいで良さそうです。
-12のほうが高く上がります。上方向がマイナスという意味です。
ランダムにしたい場合はrandom(-2, -12)のように書く。

（花火の大きさ）：だいたい0.8〜1.0 の間くらいで適当に調整してください。１に近づくほど大きくなります。
              大きさというより弾けるときの速さです。速くなるとより遠くに飛ぶので結果大きくなります。

（花火の色）:0~360の値です。HSBの色相(Hue)の数字を指定する。S、Bは100で設定してあります。
https://codepen.io/makudo/pen/qPrjde 長方形のカラーパレットを動かして選ぶ。

数字を変えてみて試してみると変化がよくわかります。

btn.addEventListener('click', function () {
  fireworks.push(new Firework(width / 2, -11, 0.90, 146)); ←36行目を変更する
});

*/

var fireworks = [];
var gravity;

var btn = document.getElementById('btn');

// ボタンをクリックしたときの処理
btn.addEventListener('click', function () {
  fireworks.push(new Firework(width / 2, -11, 0.90, 146));
});

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('canvas'); // キャンバスの親要素をidで指定する。

  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(1);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(HSB);
  background(0, 0, 0, 0.1);

  // if (random(1) < 0.03) {
  //   fireworks.push(new Firework(random(width), random(-8, -12), 0.9, random(0, 360)));
  // }



  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
