import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Stack,
  Container,
} from "@mui/material";
import Header from "./Header";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Footer from "./Footer";
import { Users, Clock, Target, MessageSquare, Bot, Plug, TrendingUp, HeadphonesIcon, Calendar, ShoppingCart, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { CardProject } from "./CardProject";
import { CardUseCase } from "./CardUseCase";
import { Testimonial } from "./Testimonial";
import { FAQItem } from "./FAQItem";
import { useTheme } from "@mui/material/styles";
import './styles/globals.css';

const ByUseCaseImpl: React.FC = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const theme = useTheme();


  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleScrollToCasos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const casosSection = document.getElementById("casos");
    if (casosSection) {
      casosSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const proyectos = [
    {
      icon: MessageSquare,
      title: "SFAI Chat",
      description:
        "Asistente conversacional para ventas y soporte. Omnicanal, entrenado con tus datos.",
      metric: "conversión a cita +32%",
    },
    {
      icon: Bot,
      title: "SFAI Agent",
      description:
        "Automatización de procesos y toma de decisiones. Orquestación y workflows.",
      metric: "tareas automáticas +85%",
    },
    {
      icon: Plug,
      title: "SFAI Connect",
      description:
        "Integraciones seguras: CRM, ecommerce, ERP, n8n/Zapier, webhooks y APIs.",
      metric: "tiempo de setup -70%",
    },
  ];

  const casosDeUso = [
    {
      icon: TrendingUp,
      title: "Leads y calificación automática",
      description: "Prioridad por intención y derivación inteligente.",
      metric: "leads calificados +42%",
      badge: "Recomendado",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte 24/7 sin espera",
      description: "FAQ, estados y devoluciones.",
      metric: "tiempo de respuesta -87%",
    },
    {
      icon: Calendar,
      title: "Agendamiento y recordatorios",
      description: "Turnos, test drives, visitas.",
      metric: "no-shows -62%",
    },
    {
      icon: Clock,
      title: "Cotizaciones y recupero",
      description: "Seguimiento proactivo y cobros.",
      metric: "recuperación +45%",
    },
    {
      icon: ShoppingCart,
      title: "Catálogo y pagos",
      description: "Enlaces de pago, stock y actualizaciones.",
      metric: "conversión +38%",
    },
    {
      icon: CheckCircle2,
      title: "Postventa y NPS",
      description: "Encuestas, alertas y fidelización.",
      metric: "NPS +28 puntos",
    },
  ];

  const testimonials = [
    {
      quote: 'Disminuimos el tiempo de respuesta un 87% en 3 semanas.',
      name: 'María González',
      role: 'Directora Comercial',
      company: 'AutoMax'
    },
    {
      quote: 'El asistente nos generó +28% test drives comparado con el trimestre anterior.',
      name: 'Carlos Martínez',
      role: 'Gerente de Ventas',
      company: 'Premium Motors'
    },
    {
      quote: 'Recuperamos leads que antes se perdían. La inversión se pagó sola en el primer mes.',
      name: 'Ana Silva',
      role: 'CEO',
      company: 'Propiedades del Sur'
    },
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo lleva la instalación?',
      answer: 'La configuración básica toma entre 15-30 minutos. Te guiamos paso a paso y tu asistente puede estar respondiendo el mismo día.'
    },
    {
      question: '¿Qué requisitos necesito?',
      answer: 'WhatsApp Business API (te ayudamos a obtenerlo sin costo), un listado básico de FAQs y acceso a tus sistemas si querés integraciones. No necesitás conocimientos técnicos.'
    },
    {
      question: '¿Cómo se asegura la calidad de las respuestas?',
      answer: 'Entrenamos el asistente con tu información específica y casos de uso. Incluye validación humana opcional y mejora continua basada en interacciones reales.'
    },
    {
      question: '¿Qué nivel de seguridad tiene?',
      answer: 'Cumplimos con GDPR y normativas locales. Todos los datos están encriptados y almacenados en servidores certificados. No compartimos información con terceros.'
    },
    {
      question: '¿Cuál es el costo?',
      answer: 'Planes desde USD 99/mes con WhatsApp API incluido. Sin costos ocultos ni límites de mensajes en planes empresariales. Agenda una demo para conocer el plan ideal para tu negocio.'
    },
    {
      question: '¿Qué soporte técnico ofrecen?',
      answer: 'Soporte técnico en español por WhatsApp, email y videollamada. Tiempo de respuesta promedio: 2 horas. Planes enterprise incluyen soporte prioritario 24/7 y SLA garantizado.'
    },
  ];

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        minHeight: "100vh",
        bgcolor: theme.palette.mode === "dark"
            ? "#0F1419" // fondo dark exacto
            : "#FFFFFF", // fondo light
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      })}
    >
      {/* Header fijo con modo claro/oscuro */}
      <Header />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 12, md: 10 },
          px: { xs: 2, md: 20 },
          py: 6,
        }}
      >
        {/* Breadcrumb */}
        <Box sx={{ mb: 4 }}>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexWrap: "wrap", // permite que los elementos bajen de línea
              alignItems: "center",
              gap: "6px",
              color: "var(--mui-palette-text-secondary)",
              wordBreak: "break-word", // evita cortes visuales
              lineHeight: 1.3,
              fontSize: theme.typography.pxToRem(13), // base
              [theme.breakpoints.up("sm")]: {
                fontSize: theme.typography.pxToRem(14),
              },
            }}
          >
            <Link href="/" underline="hover" color="inherit">
              Inicio
            </Link>
            <span>/</span>
            <Link href="#" underline="hover" color="inherit">
              Soluciones
            </Link>
            <span>/</span>
            <Typography color="text.primary">Por Casos de Uso</Typography>
          </Box>
        </Box>

        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 15 }}>
          {/* Texto Hero */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Soluciones de IA por Caso de Uso
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                mb: 4,
                color: "text.secondary",
                maxWidth: 500,
              }}
            >
              Explorá nuestros proyectos y servicios y descubrí cómo SFAI impacta
              en ventas, soporte y operaciones.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              <ButtonPrimary href="#casos" onClick={handleScrollToCasos} size="large">
                Explorar Casos de Uso
              </ButtonPrimary>
              <ButtonSecondary href="{{link_contacto}}" size="large">
                Contactar con un especialista
              </ButtonSecondary>
            </Box>

            <Typography variant="caption" color="text.secondary">
              Demo guiada en 15 min
            </Typography>
          </Grid>

          {/* Bloques informativos tipo glass */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: theme.palette.mode === "dark"
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(255,255,255,0.15)", // borde claro
                background: theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)" // fondo más suave que el borde
                  : "rgba(255,255,255,0.05)", // fondo claro
                backdropFilter: "blur(16px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              })}
            >
              <Grid container spacing={2}>
                {[
                  { icon: <Users color="#fff" size={20} />, title: "Leads calificados", desc: "Scoring automático" },
                  { icon: <Clock color="#fff" size={20} />, title: "Respuestas 24/7", desc: "En segundos" },
                  { icon: <Target color="#fff" size={20} />, title: "Seguimiento y cobros", desc: "Automatizado" },
                ].map((item, i) => (
                  <Grid key={i} size={{ xs: 12 }}>
                    <Box
                      sx={(theme) => ({
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: "16px",
                        transition: "0.3s",
                        border: theme.palette.mode === "dark"
                          ? "1px solid rgba(220, 149, 24, 0.2)" // borde naranja dark
                          : "1px solid rgba(255,255,255,0.2)", // borde claro
                        background: theme.palette.mode === "dark"
                          ? "linear-gradient(to bottom right, rgba(220,149,24,0.1), rgba(220,149,24,0.05))" // fondo naranja dark
                          : "rgba(255,255,255,0.05)", // fondo claro
                        backdropFilter: "blur(4px)",
                        "&:hover": {
                          transform: "scale(1.03)",
                          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        },
                      })}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: "#F59E0B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Proyectos SFAI */}
        <Box id="proyectos" sx={{ mb: 12, scrollMarginTop: "100px" }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, textAlign: "center", color: "text.primary" }}>
            Proyectos y Servicios SFAI
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, textAlign: "center", color: "text.secondary" }}>
            Tecnología de IA adaptada a tu negocio
          </Typography>

          <Grid container spacing={4}>
            {proyectos.map((proyecto, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <CardProject
                  icon={proyecto.icon}
                  title={proyecto.title}
                  description={proyecto.description}
                  metric={proyecto.metric}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Casos de Uso por Industria */}
        <Box id="casos" sx={{ mb: 12, scrollMarginTop: "100px" }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, textAlign: "center", color: "text.primary" }}>
            Casos de Uso por Industria
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, textAlign: "center", color: "text.secondary" }}>
            Soluciones probadas para cada sector
          </Typography>

          <Grid container spacing={4}>
            {casosDeUso.map((caso, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <CardUseCase
                  icon={caso.icon}
                  title={caso.title}
                  description={caso.description}
                  metric={caso.metric}
                  badge={caso.badge}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Carousel */}
        <Box
          sx={{
            maxWidth: 1440,
            mx: "auto",
            px: { xs: 2, md: 5 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 600,
                color: "var(--text-primary)",
                mb: 1,
              }}
            >
              Lo que dicen nuestros clientes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "var(--text-secondary)",
              }}
            >
              Más de 10 empresas ya optimizan su canal digital con SFAI
            </Typography>
          </Box>

          <Container maxWidth="sm" sx={{ position: "relative" }}>
            <Testimonial {...testimonials[currentTestimonial]} />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              mt={4}
            >
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "var(--surface-glass)",
                  border: "1px solid var(--surface-glass-border)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "var(--glass-shadow)",
                  "&:hover": { bgcolor: "var(--neutral)" },
                }}
              >
                <ChevronLeft
                  style={{ width: 20, height: 20, color: "var(--text-primary)" }}
                />
              </IconButton>

              <Stack direction="row" spacing={1}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    sx={{
                      width: index === currentTestimonial ? 24 : 8,
                      height: 8,
                      borderRadius: "999px",
                      bgcolor:
                        index === currentTestimonial
                          ? "var(--accent)"
                          : "var(--neutral)",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>

              <IconButton
                onClick={nextTestimonial}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "var(--surface-glass)",
                  border: "1px solid var(--surface-glass-border)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "var(--glass-shadow)",
                  "&:hover": { bgcolor: "var(--neutral)" },
                }}
              >
                <ChevronRight
                  style={{ width: 20, height: 20, color: "var(--text-primary)" }}
                />
              </IconButton>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box
        id="faq"
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 5 },
          py: { xs: 8, md: 10 },
          scrollMarginTop: "100px",
        }}
      >
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 600,
              color: "var(--text-primary)",
              mb: 1,
            }}
          >
            Preguntas frecuentes
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Box>
      </Box>


        {/* Final CTA Section */}
        <Box
          sx={{
            maxWidth: 1440,
            mx: "auto",
            px: { xs: 4, md: 30 },
            py: { xs: 12, md: 16 },
            mb: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              p: { xs: 6, md: 12 },
              borderRadius: "20px",
              bgcolor: "var(--surface-glass)",
              border: "1px solid var(--surface-glass-border)",
              boxShadow: "var(--glass-shadow)",
              backdropFilter: "blur(16px)",
              textAlign: "center",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom right, var(--gradient-glass-from), transparent, var(--accent)/5)",
                pointerEvents: "none",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 256,
                height: 256,
                bgcolor: "var(--accent)/10",
                borderRadius: "50%",
                filter: "blur(48px)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -100,
                left: -100,
                width: 256,
                height: 256,
                bgcolor: "var(--accent)/10",
                borderRadius: "50%",
                filter: "blur(48px)",
              }}
            />

            <Box sx={{ position: "relative" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  mb: 3,
                }}
              >
                Elegí un caso de uso y empezá hoy con SFAI
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  color: "var(--text-secondary)",
                  mb: 6,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Te mostramos en 15 minutos cómo se adapta a tu operación.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <ButtonPrimary href="#casos" onClick={handleScrollToCasos}>
                  Explorar Casos de Uso
                </ButtonPrimary>
                <ButtonSecondary href="{{link_contacto}}">
                  Contactar con un especialista
                </ButtonSecondary>
              </Stack>
            </Box>
          </Box>
        </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ByUseCaseImpl;
