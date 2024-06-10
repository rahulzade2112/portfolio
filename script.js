window.onload = function () {
  var header = document.getElementById("header-elem");

  var menuItems = header.getElementsByClassName("icon-container");

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
      var currentItem = document.getElementsByClassName("active"); // getting access to the previously active element
      currentItem[0].className = currentItem[0].className.replace("active", ""); // accessing the previously active element and replacing its classname from active to normal
      this.className = this.className + " active"; // updating the classname of the clicked element
      var level = this.id;
      if (level == "1") {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else if (level == "2") {
        window.scroll({
          top: 500,
          left: 0,
          behavior: "smooth",
        });
      } else if (level == "3") {
        window.scroll({
          top: 1275,
          left: 0,
          behavior: "smooth",
        });
      } else if (level == "4") {
        window.scroll({
          top: 2000,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scroll({
          top: 2500,
          left: 0,
          behavior: "smooth",
        });
      }

      //   switch (level) {
      //     case "1":
      //       window.scroll({
      //         top: 0,
      //         left: 0,
      //         behavior: "smooth",
      //       });
      //       break;
      //     case "2":
      //       window.scroll({
      //         top: 500,
      //         left: 0,
      //         behavior: "smooth",
      //       });
      //       break;
      //     case "3":
      //       window.scroll({
      //         top: 1275,
      //         left: 0,
      //         behavior: "smooth",
      //       });
      //       break;
      //     case "4":
      //       window.scroll({
      //         top: 2000,
      //         left: 0,
      //         behavior: "smooth",
      //       });
      //       break;
      //     case "5":
      //       window.scroll({
      //         top: 2500,
      //         left: 0,
      //         behavior: "smooth",
      //       });
      //       break;
      //   }
    });
  }
  //   var str = "tomorrow is extra class";
  //   str = str.replace("tomorrow", "today");
  //   console.log(str);

  //   var className = "icon-container active";
  //   className = className.replace("active", "");
  //   console.log(className);
};
