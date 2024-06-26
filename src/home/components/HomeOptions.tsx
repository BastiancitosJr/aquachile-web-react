import KPICard from "./KPICard";

const modalOptions = [
  {
    id: "productividad-modal",
    title: "Productividad",
    description: "Gestión del envasado v/s producción",
    href: "/productividad",
  },
  {
    id: "auditoria-etiquetado-modal",
    title: "Auditoría Etiquetado",
    description: "Desviaciones en etiquetado",
    href: "/auditoria-etiquetado",
  },
  {
    id: "validar-limpieza-modal",
    title: "Validar Limpieza",
    description: "Limpieza en la recepción del turno",
    href: "/limpieza",
  },
  {
    id: "observaciones-seguridad-modal",
    title: "Observaciones Seguridad",
    description: "Conversaciones de seguridad en el equipo",
    href: "/observaciones-seguridad",
  },
  {
    id: "incidentes-turno-modal",
    title: "Incidentes del Turno",
    description: "Accidentes ocurrídos en el turno",
    href: "/incidentes-turno",
  },
  {
    id: "avance-mensual-modal",
    title: "Avance Mensual",
    description: "Producción esperada del mes",
    href: "/avance-mensual",
  },
];

const HomeOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {modalOptions.map(({ id, title, description, href }) => (
        <KPICard key={id} title={title} description={description} href={href} />
      ))}
    </div>
  );
};

export default HomeOptions;
