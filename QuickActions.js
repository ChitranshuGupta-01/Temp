// Quick Actions Component
const quickActions = [
  {
    icon: "fa-solid fa-clipboard-list",
    title: "Apply Now",
    description: "Quick and easy credit card application process",
    buttonText: "Start Application",
    iconClass: "quick-clipboard",
  },
  {
    icon: "fa-solid fa-question",
    title: "How to Apply",
    description: "Step-by-step guide to credit card applications",
    buttonText: "View Guide",
    iconClass: "quick-question",
  },
  {
    icon: "fa-solid fa-credit-card",
    title: "Types of Credit Cards",
    description: "Explore our complete range of credit cards",
    buttonText: "Compare Cards",
    iconClass: "quick-card",
  },
];

const QuickActions = ({ title, subtitle }) => {
  return (
    <div className="container mt-5 mb-5">
      <h3 className="mb-4 fw-semibold">{title}</h3>
      <p className="mb-4 text-muted" style={{ marginTop: "-14px" }}>
        {subtitle}
      </p>

      <div className="row g-4 quick-actions">
        {quickActions.map((action, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <QuickActionCard
              icon={action.icon}
              title={action.title}
              description={action.description}
              buttonText={action.buttonText}
              iconClass={action.iconClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

const QuickActionCard = ({
  icon,
  title,
  description,
  buttonText,
  iconClass,
}) => {
  return (
    <div className="card h-100 p-3 text-center">
      <div className={`quick-icon-bg ${iconClass}`}>
        <i className={icon}></i>
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-outline-primary btn-sm">
        {buttonText}
      </a>
    </div>
  );
};
