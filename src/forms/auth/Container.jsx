import Form from "@/components/basic/Form";

function Container({ title, children, onSubmit }) {
  return (
    <Form
      className="p-10 flex flex-col gap-2 rounded drop-shadow-lg bg-slate-50"
      onSubmit={onSubmit}
    >
      {title && <h3>{title}</h3>}
      {children}
    </Form>
  );
}

export default Container;
