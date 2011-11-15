# How to use?

```
<script src="async-typekit.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" charset="utf-8">
  window.AsyncTypekit.init("your-typekit-kit-id", {
    onLoading: function(){
      console.log("loading");
    },
    onActive: function(){
      console.log("active");
    },
    onInactive: function(){
      console.log("inactive");
    }
  });
</script>
```