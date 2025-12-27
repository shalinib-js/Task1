import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

/* Yup Schema */
const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[A-Za-z ]+$/, "Only letters allowed"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain 1 uppercase letter, 1 number, and 1 special character"
    ),

  terms: Yup.boolean().oneOf([true], "You must agree to terms & conditions"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  // const handleData = (data) => {
  //   console.log(data);
  //   alert("Form Submitted Successfully!");
  // };

  const handleData = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );

      alert(res.data.message);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container
      className="mt-5 border border-dark rounded p-4"
      style={{ maxWidth: "400px" }}
    >
      <h3 className="mb-4 text-center">Login</h3>

      <Form onSubmit={handleSubmit(handleData)}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("name")}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Agree to terms & conditions"
            {...register("terms")}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid">
            {errors.terms?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Button */}
        <Button variant="outline-dark" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;



