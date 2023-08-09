function toggleMode() {
  const html = document.documentElement /* acessando e pegando o html*/

  /* verifica se contem, nesse caso o "light", modo claro OPCAO 1 */
  html.classList.toggle("light")

  /* verifica se contem, nesse caso o "light", modo claro OPCAO 2 */
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
}
