import Link from "next/link"

const PageHeader = ({title}: {title: string}) => {
  return (
    <div className="section-bg hero-bg">
      <section className="ed-breadcrumbs background-image" style={{ backgroundImage: "url(/assets/images/background/page-header.webp)" }}>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-12">
                      <div className="ed-breadcrumbs__content">
                          <h3 className="ed-breadcrumbs__title">{title}</h3>
                          <ul className="ed-breadcrumbs__menu">
                              <li className="active"><Link href="/">Home</Link></li>
                              <li>/</li>
                              <li>{title}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
  )
}

export default PageHeader