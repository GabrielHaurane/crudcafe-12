import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <section className="mainSection align-content-center">
      <Container className="">
        <Row className="justify-content-center">
          <Card>
            <Card.Body>
              <div className="justify-content-center d-flex">
                <Card.Title>Login</Card.Title>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ejemplo@gmail.com" 
                  {...register("email",{
                    required:"El mail es un dato obligatorio",
                    minLength:{
                        value:11,
                        message: "Debe ingresar como minimo 11 caracteres"
                    },
                    maxLength: {
                        value: 50,
                        message: "Debe ingresar como maximo 50 caracteres"
                    }
                  })}
                  />
                  <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Ejemplo123" 
                  {...register("contrasenia", {
                    required: "La contraseña es un campo obligatorio",
                    minLength:{
                        value: 8,
                        message: "Debe ingresar como minimo 8 caracteres"
                    },
                    maxLength:{
                        value: 20,
                        message: "Debe ingresar como maximo 20 caracteres"
                    }
                  })}
                  />
                  <Form.Text className="text-danger">{errors.contrasenia?.message}</Form.Text>
                </Form.Group>
                <div className="justify-content-center d-flex">
                  <Button type="submir" variant="success">Enviar</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
