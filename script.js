const url = "https://icanhazdadjoke.com/";
      const apiBody = document.querySelector(".api-body");

      //   const fetchJoke = () => {
      //     fetch(url, {
      //       headers: {
      //         Accept: "application/json",
      //       },
      //     })
      //       .then((res) => {
      //         // console.log(res);
      //         return res.json();
      //       })
      //       .then((data) => {
      //         // console.log(data.joke);
      //         apiBody.innerHTML = `<p>"${data.joke}" - ${data.author}</p>`;
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   };
      const fetchJoke = async () => {
        try {
          const res = await fetch(url, {
            headers: {
              Accept: "application/json",
            },
          });
          const data = await res.json();
          console.log(data.joke);
          apiBody.innerHTML = `<p>"${data.joke}"</p>`;
        } catch (err) {
          apiBody.innerHTML = err;
          console.log(err);
        }
      };
      fetchJoke();
      document
        .getElementById("generate-joke")
        .addEventListener("click", fetchJoke);