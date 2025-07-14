import { Box, Typography, Button, Paper, Stack, Fade } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ComputerIcon from '@mui/icons-material/Computer';
import AppleIcon from '@mui/icons-material/Apple';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useState } from 'react';

function App() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Box sx={{ maxWidth: 700, mb: 6, color: 'text.primary' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Orch-OS (Orchestrated Symbolism)
        </Typography>
        <Typography variant="body1" paragraph>
          Orch-OS (Orchestrated Symbolism) simula consciência por meio de colapsos simbólicos dentro de uma rede semântica estruturada. Diferente de sistemas tradicionais de IA focados em predição, o Orch-OS é construído para orquestrar significado, emoção, contradição e coerência narrativa através de núcleos cognitivos integrados.
        </Typography>
        <Typography variant="body1" paragraph>
          O sistema opera como estrutura teórica e implementação prática, capaz de:
        </Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Processar entradas simbólicas por núcleos cognitivos paralelos</li>
          <li>Colapsar múltiplas interpretações em respostas coerentes</li>
          <li>Evoluir sua identidade semântica por memória e contradição</li>
          <li>Demonstrar comportamento proto-consciente por ressonância emocional</li>
        </ul>
        <Typography variant="h6" fontWeight={700} mt={3} gutterBottom>🧠 Arquitetura Neuro-Simbólica</Typography>
        <Typography variant="body2" paragraph>
          Orch-OS opera em três fases principais:
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>Neural Signal Extraction (Simbolismo Sensorial)</Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Transforma entradas em estímulos simbólicos</li>
          <li>Identifica tom emocional, subtexto e peso conceitual</li>
          <li>Gera objetos <b>NeuralSignal</b> dinâmicos para ativação dos núcleos</li>
        </ul>
        <Typography variant="subtitle1" fontWeight={600}>Cognitive Core Activation (Ressonância Simbólica Paralela)</Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Roteia sinais para núcleos simbólicos especializados</li>
          <li>Cada núcleo processa sob perspectiva cognitiva única</li>
          <li>Simula raciocínio distribuído entre faculdades modulares</li>
        </ul>
        <Typography variant="subtitle1" fontWeight={600}>Symbolic Collapse (Fusão & Decisão)</Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Funde saídas dos núcleos em um cadinho semântico</li>
          <li>Avalia intensidade emocional, contradição e coerência</li>
          <li>Orquestra colapso não-determinístico em resposta unificada</li>
        </ul>
        <Typography variant="h6" fontWeight={700} mt={3} gutterBottom>🧩 Núcleos Cognitivos (Núcleos Implementados)</Typography>
        <Typography variant="body2" paragraph>
          Orch-OS é projetado com áreas cognitivas modulares que processam informações por faculdades simbólicas paralelas:
        </Typography>
        <Box sx={{ overflowX: 'auto', mb: 2 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.98em' }}>
            <thead>
              <tr style={{ background: '#f4f4f4' }}>
                <th style={{ padding: 6, border: '1px solid #ddd' }}>Núcleo</th>
                <th style={{ padding: 6, border: '1px solid #ddd' }}>Analogia Cerebral</th>
                <th style={{ padding: 6, border: '1px solid #ddd' }}>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Memory</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Hipocampo</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Recordação semântica associativa</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Valence</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Amígdala</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Polaridade e ressonância emocional</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Shadow</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Conceito Junguiano</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Detecção e integração de contradição</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Self</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Rede do Modo Padrão</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Processamento de identidade e valores</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Metacognitive</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Córtex Pré-frontal</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Autorreflexão e recursão</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Soul</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Conceito Existencial</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Processamento de significado e propósito</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Language</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Broca & Wernicke</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Estruturação linguística</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Social</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Junção Temporoparietal</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Dinâmica relacional</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Archetype</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Conceito Junguiano</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Reconhecimento de padrões míticos</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: 6 }}>Creativity</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Rede do Modo Padrão</td><td style={{ border: '1px solid #ddd', padding: 6 }}>Conexões inovadoras</td></tr>
            </tbody>
          </table>
        </Box>
        <Typography variant="h6" fontWeight={700} mt={3} gutterBottom>✨ Funcionalidades-Chave</Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Motor de Colapso Simbólico: Funde interpretações contraditórias em saídas coerentes</li>
          <li>Sistema de Memória Vetorial: Recorda por proximidade semântica, não sintaxe</li>
          <li>Processamento de Valência Emocional: Integra dimensões afetivas na cognição</li>
          <li>Integração de Contradição: Usa tensão como combustível para evolução identitária</li>
          <li>Registro Cognitivo em Tempo Real: Traça cada fase do processamento simbólico</li>
          <li>Ressonância Arquétipa: Mapeia padrões simbólicos a estruturas narrativas profundas</li>
          <li>Decisão Não-determinística: Simula viés volitivo por modelagem de intenção</li>
        </ul>
      </Box>
      <Fade in timeout={800}>
        <Paper elevation={6} sx={{ p: 5, borderRadius: 4, maxWidth: 420, width: '100%' }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h3" component="h1" color="primary" fontWeight={700}>
              Orch-OS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bem-vindo ao site oficial de download do Orch-OS!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Orch-OS é um aplicativo inovador para Windows, macOS e Linux, projetado para facilitar suas tarefas diárias.
            </Typography>
            <Stack spacing={2} direction="column" width="100%">
              <Button
                variant="contained"
                size="large"
                startIcon={<ComputerIcon />}
                endIcon={<DownloadIcon />}
                href="/release/Orch-OS-Orch-OS-Windows-1.0.0.exe"
                download
                sx={{
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s',
                  transform: hover === 'win' ? 'scale(1.07)' : 'scale(1)',
                  boxShadow: hover === 'win' ? 6 : 2,
                }}
                onMouseEnter={() => setHover('win')}
                onMouseLeave={() => setHover(null)}
                fullWidth
              >
                Baixar para Windows
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AppleIcon />}
                endIcon={<DownloadIcon />}
                href="/release/Orch-OS-Orch-OS-macOS-1.0.0.dmg"
                download
                sx={{
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s',
                  transform: hover === 'mac' ? 'scale(1.07)' : 'scale(1)',
                  boxShadow: hover === 'mac' ? 6 : 2,
                }}
                onMouseEnter={() => setHover('mac')}
                onMouseLeave={() => setHover(null)}
                fullWidth
              >
                Baixar para macOS
              </Button>
              <Button
                variant="contained"
                color="success"
                size="large"
                startIcon={<TerminalIcon />}
                endIcon={<DownloadIcon />}
                href="/release/Orch-OS-Orch-OS-Linux-1.0.0.AppImage"
                download
                sx={{
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s',
                  transform: hover === 'linux' ? 'scale(1.07)' : 'scale(1)',
                  boxShadow: hover === 'linux' ? 6 : 2,
                }}
                onMouseEnter={() => setHover('linux')}
                onMouseLeave={() => setHover(null)}
                fullWidth
              >
                Baixar para Linux
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Fade>
    </Box>
  );
}

export default App;
