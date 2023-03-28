<script>
  import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

  const handClick = () => {
    console.log('Placing your order');
    goto('/products');
  };

  beforeNavigate((navigetion) => {
    console.log({ before: navigetion})
  });
  afterNavigate((navigetion) => {
    console.log({ after: navigetion})
  });

</script>

<h1>Welcome home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<!-- Place order(発注する)-->
<button on:click={handClick}>Place order</button>
