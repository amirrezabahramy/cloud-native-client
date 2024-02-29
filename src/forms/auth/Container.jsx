import Form from "@/basic/Form";

function Container({ title, children, onSubmit }) {
  return (
    <Form
      className="p-7 flex flex-col gap-2 rounded drop-shadow bg-pink-50"
      onSubmit={onSubmit}
    >
      {title && <h3>{title}</h3>}
      {children}
    </Form>
  );
}

export default Container;
