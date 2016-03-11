(function() {
    var readyStateCheckInterval = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        $(".js-comment-header-reaction-button").remove()
        $(".js-reactions-container").remove()
      }
    }, 10);
})();
