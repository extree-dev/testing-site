import { useEffect, useState } from "react";

const projects = [
  {
    title: "Forma",
    tags: ["Айдентика", "Арт-дирекшн"],
    copy: "Визуальная система для архитектурного бюро: строгая сетка, тактильная типографика и гибкий цифровой язык.",
    image:
      "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1400",
  },
  {
    title: "Sever",
    tags: ["Digital", "Редакционный дизайн"],
    copy: "Новая платформа о современной культуре с модульной дизайн-системой и живой редакционной подачей.",
    image:
      "https://images.unsplash.com/photo-1599420186985-5c3d1a038e84?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1400",
  },
  {
    title: "Contour",
    tags: ["Web", "Разработка"],
    copy: "Сайт для предметного дизайнера, построенный вокруг деталей, воздуха и спокойной выразительности.",
    image:
      "https://images.unsplash.com/photo-1534138807944-7b5dd2954e1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1400",
  },
  {
    title: "Spectrum",
    tags: ["Кампания", "Motion"],
    copy: "Серия цифровых материалов для запуска нового пространства музыки, дизайна и медиаискусства.",
    image:
      "https://images.unsplash.com/photo-1453586857165-eb78d44460ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1400",
  },
];

const iconPaths = [
  <path key="1" d="M3 14.5h18M6 14.5V7h10v7.5M17.5 8h3v8h-3z" />,
  <path key="2" d="M6 3v18M10 3h8v18h-8M13 7h2M13 11h2M13 15h2" />,
  <path key="3" d="M5 5h14v14H5zM2 8V5a3 3 0 0 1 3-3h3M22 8V5a3 3 0 0 0-3-3h-3M2 16v3a3 3 0 0 0 3 3h3M22 16v3a3 3 0 0 1-3 3h-3M9 16l3-8 3 8M10 13h4" />,
  <path key="4" d="M4 18l8-12 2 6 6-2-8 10-2-5zM18 3v3M21 6l-2 2M15 5l-2-2" />,
  <path key="5" d="M4 17h16M6 14V5h12v9M8 8h8M8 11h5" />,
  <path key="6" d="M4 8c3-5 9-4 10 0 5-1 8 5 4 8-3 3-8 1-9-2-3 2-7 0-7-3 0-2 1-3 2-3zM15 17l3 3M18 17l-3 3" />,
  <path key="7" d="M4 5h13v11H4zM8 19h12V9M17 5l3-3M17 5h5V0" />,
  <path key="8" d="M4 17l4-11 6 4 6-2-1 11-8-2zM8 6l3 11M14 10l5 9" />,
  <path key="9" d="M3 17c3-10 5 5 8-5s4 9 10-3" />,
  <path key="10" d="M3 6h8v8H3zM13 6h8v8h-8M3 17h18" />,
];

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <span />
    </span>
  );
}

function HeroIcon({ index }: { index: number }) {
  return (
    <svg className={`hero-icon hero-icon--${index + 1}`} viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[index]}
    </svg>
  );
}

function Navigation() {
  return (
    <nav className="nav-pill" aria-label="Основная навигация">
      <a className="nav-mark" href="#top" aria-label="В начало">
        <Mark />
      </a>
      <a href="#about">about me</a>
      <a href="#clients">clients</a>
      <a href="#work">work</a>
      <a href="#contact">contact</a>
    </nav>
  );
}

export default function App() {
  const [noticeOpen, setNoticeOpen] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main id="top">
      {noticeOpen && (
        <aside className="notice">
          <span>
            Нравятся мои работы? Заполните <a href="#contact">форму</a> или напишите
            на <a href="mailto:hello@vetrov.design">hello@vetrov.design</a>
          </span>
          <button type="button" aria-label="Закрыть" onClick={() => setNoticeOpen(false)}>
            ×
          </button>
        </aside>
      )}

      <div className="mobile-nav">
        <Navigation />
      </div>

      <section className="hero-card">
        <div className="hero-card__texture" />
        {iconPaths.map((_, index) => (
          <HeroIcon index={index} key={index} />
        ))}
        <h1>vetrov.work</h1>
        <span className="photo-credit">Point Normal / Unsplash</span>
      </section>

      <div className="desktop-nav">
        <Navigation />
      </div>

      <section className="about" id="about">
        <h2>about me</h2>
        <div className="about__copy">
          <p>
            Меня зовут Саша, я графический и продуктовый дизайнер. Создаю
            айдентику, сайты и интерфейсы для команд, которые хотят говорить с
            людьми ясно и уверенно.
          </p>
          <p>
            В работе я соединяю стратегию, типографику и движение. Мне важно,
            чтобы визуальная система была не только выразительной, но и
            действительно помогала продукту расти — от первого экрана до
            последней детали.
          </p>
          <p>
            Работаю с культурными проектами, технологичными командами и
            локальными брендами. Беру проекты целиком или подключаюсь к команде
            на этапе концепции и арт-дирекшна.
          </p>
        </div>
        <div className="languages">
          <span>talk to me in</span>
          <div><b>RU</b><b>EN</b><b>DE</b></div>
        </div>
      </section>

      <section className="clients" id="clients">
        <h2>clients</h2>
        <div className="marquee">
          <div className="marquee__track">
            {["NORTH", "FØRMA", "KONTUR", "SIGNAL", "SFERA", "NORTH", "FØRMA", "KONTUR"].map(
              (client, index) => <span key={`${client}-${index}`}>{client}</span>,
            )}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work__spine" />
        <h2>work</h2>
        <div className="work__filters">
          <span>Айдентика</span>
          <span>Сайты</span>
          <span>Продукты</span>
          <span>Кампании</span>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt="" />
              <div className="project-card__body">
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <a href="#contact">Смотреть проект <span>↗</span></a>
              </div>
              <span className="project-card__index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>contact</h2>
        <div className="contact__card">
          <p>Есть проект или просто хорошая идея?</p>
          <a href="mailto:hello@vetrov.design">hello@vetrov.design</a>
        </div>
        <footer>
          <Mark />
          <span>Саша Ветров · дизайнер</span>
          <span>© 2025</span>
        </footer>
      </section>
    </main>
  );
}
