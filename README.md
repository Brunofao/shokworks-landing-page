# Landing page Shokworks

##### Media queries:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- xxl: 1536px

##### Se puede mejorar con:

- Componentes reutilizables (títulos, párrafos, containers, etc.)
- Trabajar los componentes con CSS Modules (no SCSS) || Styled Components
- Se puede hacer con Next.js para mejorar:
	- SEO
	- Componentes reutilizables, ejemplo: Image, para optimizar las imágenes
- Mejorar el nombramiento de clases (se usó BEM pero puede hacerse mejor)
- Mejorar la semántica de HTML, ejemplo: las cards pueden ser un article

#### Detalles a tener en cuenta:
- Las cards de **Speciality Of Us?** se ven un pocos fuera del diseño con respecto a las imágenes que recibo desde el API
- La card de **Client Says?**, faltó cuando le das clic vas a ese testimonio
- Algunas imágenes que no se encuentran en los **recursos** y Xd no permite descargar esos recursos

La estructura de la **Card** a **Componente** puede ser de esta manera:
```json
Card/
	index.js
	Card.js
	Card.module.scss
	CardHeader.js
	CardHeader.module.scss
	CardBody.js
	CardBody.module.scss
	CardFooter.js
	Card.module.scss
/
```

------------
**Bruno Faoro** - brunfao@gmail.com
