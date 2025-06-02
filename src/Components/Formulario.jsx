import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import "./../Styles/Formulario.css";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío (API, email, etc.)
    alert("¡Consulta enviada! Pronto nos pondremos en contacto.");
    setForm({ nombre: "", email: "", telefono: "", consulta: "" });
  };

  return (
    <section className="form-section">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2 className="form-title">Consultanos</h2>
        <div className="form-group">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaPhone className="form-icon" />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <FaCommentDots className="form-icon" />
          <textarea
            name="consulta"
            placeholder="Escribe tu consulta..."
            value={form.consulta}
            onChange={handleChange}
            required
            rows={4}
          />
        </div>
        <button type="submit" className="form-btn">
          <FaPaperPlane style={{ marginRight: "8px" }} />
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Formulario;