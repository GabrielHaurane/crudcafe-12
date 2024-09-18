import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (usuario)=>{
    if(login(usuario)){
      Swal.fire({
        title: 'usuario logueado',
        text: `se creo correctamente el producto ${producto.nombreProducto}`,
        icon: "success",
      });
      setUsuarioLogueado(usuario.email)
    }else{
      Swal.fire({
        icon: "error",
        title: "Error de logueo el mail o la password es incorrecto",
      });
    }
  }
  return (
    <section className="mainSection align-content-center">
      <Container className="">
        <Row className="justify-content-center">
          <Card>
            <Card.Body>
              <div className="justify-content-center d-flex">
                <Card.Title>Login</Card.Title>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("password", {
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
                  <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
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
