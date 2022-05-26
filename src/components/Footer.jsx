const Footer = ({ mentions }) => {
  function NYUS() {
    window.alert('Dans le système judiciaire, les crimes sexuels sont considérés comme particulièrement monstrueux. À New York, les inspecteurs qui enquêtent sur ces crimes sont membres d\'une unité d\'élite appelée Unité spéciale pour les victimes. Voici leurs histoires ')
  }
  return <footer><div onClick={NYUS}>{mentions}</div></footer>
}

export default Footer