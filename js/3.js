function abc() {
  for (var i=1; i<=5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000 );
  }
}

abc();
// 此处会输出5个6