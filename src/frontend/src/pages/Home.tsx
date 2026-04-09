import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ChevronRight,
  Clock,
  Phone,
  Search,
  Shield,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    num: 1,
    title: "Enter Symptoms",
    description: "Search and select the symptoms you're experiencing",
    Icon: Search,
  },
  {
    num: 2,
    title: "Answer Questions",
    description: "Short follow-up questions help narrow down possibilities",
    Icon: Stethoscope,
  },
  {
    num: 3,
    title: "See Results",
    description: "Get ranked conditions with triage recommendations",
    Icon: Activity,
  },
];

const features = [
  {
    icon: Clock,
    title: "Quick Assessment",
    description: "Complete your symptom check in under 5 minutes",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your health data stays on-device and is never shared",
  },
  {
    icon: Stethoscope,
    title: "Guided Questions",
    description: "Step-by-step follow-up for more accurate insights",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Emergency Banner */}
      <div className="bg-destructive/10 border-b border-destructive/20 px-4 py-2.5">
        <div className="container max-w-4xl mx-auto flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-destructive flex-shrink-0" />
          <p className="text-sm text-destructive font-medium">
            <strong>Emergency:</strong> If you have severe chest pain,
            difficulty breathing, or signs of stroke — call emergency services
            immediately.
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-background py-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-card">
              <Activity className="w-7 h-7 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-tight"
          >
            Symptom Checker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Understand your symptoms in minutes. Secure, guided, human-centered
            healthcare insight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold shadow-elevated hover:shadow-card transition-smooth"
              onClick={() => navigate({ to: "/assess" })}
              data-ocid="cta-start-check"
            >
              Start Assessment
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="bg-muted/30 py-16 px-4 border-y border-border">
        <div className="container max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-display text-2xl font-bold text-foreground text-center mb-10"
          >
            How it works
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-card rounded-xl p-5 shadow-card border border-border text-center"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 mt-2">
                  <step.Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-muted/20 py-10 px-4 border-t border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-card">
            <div className="w-8 h-8 rounded-lg bg-chart-5/15 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4 text-chart-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Medical Disclaimer
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SymptomCheck is for informational purposes only and does not
                provide medical advice, diagnosis, or treatment. Always consult
                a qualified healthcare professional for any medical concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
