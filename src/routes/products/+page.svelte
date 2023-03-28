<script>
  export let productId = 100;
</script>

<a href="/">Home</a>

<h1>Product List</h1>
<h2><a href="/products/1">Product 1</a></h2>
<h2><a href="/products/2">Product 2</a></h2>
<h2><a href="/products/3">Product 3</a></h2>

<!-- 可読性を向上させるためバッククオートを使う('や"が使える) -->
<h2><a href={`/products/${productId}`}>Product {productId}</a></h2>

<!-- 参考：もっとシンプルに書いてもOK 
<h2><a href="/products/{productId}">Product {productId}</a></h2>
-->