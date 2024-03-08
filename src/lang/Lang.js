
import "bootstrap/dist/css/bootstrap.css"

export default function Lang({onChangeLang}) {

    const handle_lang = (e) =>
    {
      e.preventDefault();
      onChangeLang(e.currentTarget.dataset.lang);
    }
  return (
    <>
      <ul className="nav justify-content-center">
      <li className="nav-item">
         <a className="nav-link active" data-lang="FR"
           onClick={handle_lang}   href="#">Francais</a>
      </li>
      <li  className="nav-item">
         <a className="nav-link"data-lang="EN"
           onClick={handle_lang}   href="#">English</a>
      </li>
      <li  className="nav-item">
         <a className="nav-link" data-lang="ES"
           onClick={handle_lang}    href="#">Espanol</a>
      </li>
      </ul>
    </>
  )
}


