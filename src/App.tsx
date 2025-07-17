import { Box, Typography, Button, Paper, Stack, Fade, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ComputerIcon from '@mui/icons-material/Computer';
import AppleIcon from '@mui/icons-material/Apple';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useState } from 'react';

function App() {
  const [hover, setHover] = useState<string | null>(null);
  const theme = useTheme();

  // Cores customizadas
  const mainGradient = 'linear-gradient(135deg, #4f8cff 0%, #6a82fb 100%)';
  const macGradient = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
  const linuxGradient = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';

  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: '#181c24', display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 2, md: 6 }, px: 2 }}>
      {/* Botões de download no topo */}
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} width={{ xs: '100%', sm: 420 }} sx={{ mt: { xs: 2, md: 4 }, mb: 4 }} justifyContent="center" className="animate__animated animate__bounceIn">
        <Button
          variant="contained"
          size="large"
          startIcon={<ComputerIcon />}
          endIcon={<DownloadIcon />}
          href="/release/Orch-OS-Orch-OS-Windows-1.0.0.exe"
          download
          sx={{
            fontWeight: 700,
            px: 5,
            py: 1.2,
            minWidth: 160,
            fontSize: '1.05rem',
            background: mainGradient,
            color: '#fff',
            boxShadow: hover === 'win' ? 6 : 2,
            transform: hover === 'win' ? 'scale(1.07)' : 'scale(1)',
            transition: 'all 0.2s',
            '&:hover': { background: mainGradient, filter: 'brightness(1.1)' },
          }}
          onMouseEnter={() => setHover('win')}
          onMouseLeave={() => setHover(null)}
          fullWidth
        >
          Windows
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<AppleIcon />}
          endIcon={<DownloadIcon />}
          href="/release/Orch-OS-Orch-OS-macOS-1.0.0.dmg"
          download
          sx={{
            fontWeight: 700,
            px: 5,
            py: 1.2,
            minWidth: 160,
            fontSize: '1.05rem',
            background: macGradient,
            color: '#fff',
            boxShadow: hover === 'mac' ? 6 : 2,
            transform: hover === 'mac' ? 'scale(1.07)' : 'scale(1)',
            transition: 'all 0.2s',
            '&:hover': { background: macGradient, filter: 'brightness(1.1)' },
          }}
          onMouseEnter={() => setHover('mac')}
          onMouseLeave={() => setHover(null)}
          fullWidth
        >
          macOS
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<TerminalIcon />}
          endIcon={<DownloadIcon />}
          href="/release/Orch-OS-Orch-OS-Linux-1.0.0.AppImage"
          download
          sx={{
            fontWeight: 700,
            px: 5,
            py: 1.2,
            minWidth: 160,
            fontSize: '1.05rem',
            background: linuxGradient,
            color: '#fff',
            boxShadow: hover === 'linux' ? 6 : 2,
            transform: hover === 'linux' ? 'scale(1.07)' : 'scale(1)',
            transition: 'all 0.2s',
            '&:hover': { background: linuxGradient, filter: 'brightness(1.1)' },
          }}
          onMouseEnter={() => setHover('linux')}
          onMouseLeave={() => setHover(null)}
          fullWidth
        >
          Linux
        </Button>
      </Stack>
      {/* Card de informações resumidas */}
      <Fade in timeout={800}>
        <Paper elevation={6} sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          maxWidth: 420,
          width: '100%',
          mt: 2,
          mb: 5,
          background: 'linear-gradient(135deg, #4f8cff 0%, #6a82fb 100%)',
          color: '#fff',
        }} className="animate__animated animate__fadeInDown animate__delay-1s">
          <Stack spacing={2} alignItems="center">
            <Typography variant="h3" component="h1" color="inherit" fontWeight={700} className="animate__animated animate__tada animate__delay-2s">
              Orch-OS
            </Typography>
            <Typography variant="body1" color="inherit" align="center">
              Baixe o Orch-OS para o seu sistema operacional e experimente uma nova abordagem em inteligência artificial simbólica!
            </Typography>
          </Stack>
        </Paper>
      </Fade>
      {/* Informações detalhadas */}
      <Box sx={{
        maxWidth: 700,
        width: '100%',
        background: '#4f8cff',
        borderRadius: 4,
        boxShadow: 2,
        p: { xs: 3, md: 5 },
        mb: 6,
        color: '#fff',
      }} className="animate__animated animate__fadeInUp animate__delay-2s">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Sobre o Orch-OS
        </Typography>
        <Typography variant="body1" paragraph>
          Orch-OS (Orchestrated Symbolism) simula consciência por meio de colapsos simbólicos dentro de uma rede semântica estruturada. Diferente de sistemas tradicionais de IA focados em predição, o Orch-OS é construído para orquestrar significado, emoção, contradição e coerência narrativa através de núcleos cognitivos integrados.
        </Typography>
        <Typography variant="body1" paragraph>
          O sistema opera como estrutura teórica e implementação prática, capaz de:
        </Typography>
        <ul style={{ marginTop: 0, color: '#fff' }}>
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
        <ul style={{ marginTop: 0, color: '#fff' }}>
          <li>Transforma entradas em estímulos simbólicos</li>
          <li>Identifica tom emocional, subtexto e peso conceitual</li>
          <li>Gera objetos <b>NeuralSignal</b> dinâmicos para ativação dos núcleos</li>
        </ul>
        <Typography variant="subtitle1" fontWeight={600}>Cognitive Core Activation (Ressonância Simbólica Paralela)</Typography>
        <ul style={{ marginTop: 0, color: '#fff' }}>
          <li>Roteia sinais para núcleos simbólicos especializados</li>
          <li>Cada núcleo processa sob perspectiva cognitiva única</li>
          <li>Simula raciocínio distribuído entre faculdades modulares</li>
        </ul>
        <Typography variant="subtitle1" fontWeight={600}>Symbolic Collapse (Fusão & Decisão)</Typography>
        <ul style={{ marginTop: 0, color: '#fff' }}>
          <li>Funde saídas dos núcleos em um cadinho semântico</li>
          <li>Avalia intensidade emocional, contradição e coerência</li>
          <li>Orquestra colapso não-determinístico em resposta unificada</li>
        </ul>
        <Typography variant="h6" fontWeight={700} mt={3} gutterBottom>🧩 Núcleos Cognitivos (Núcleos Implementados)</Typography>
        <Typography variant="body2" paragraph>
          Orch-OS é projetado com áreas cognitivas modulares que processam informações por faculdades simbólicas paralelas:
        </Typography>
        <Box sx={{ overflowX: 'auto', mb: 2 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.98em', color: '#fff' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.08)' }}>
                <th style={{ padding: 6, border: '1px solid #fff' }}>Núcleo</th>
                <th style={{ padding: 6, border: '1px solid #fff' }}>Analogia Cerebral</th>
                <th style={{ padding: 6, border: '1px solid #fff' }}>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Memory</td><td style={{ border: '1px solid #fff', padding: 6 }}>Hipocampo</td><td style={{ border: '1px solid #fff', padding: 6 }}>Recordação semântica associativa</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Valence</td><td style={{ border: '1px solid #fff', padding: 6 }}>Amígdala</td><td style={{ border: '1px solid #fff', padding: 6 }}>Polaridade e ressonância emocional</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Shadow</td><td style={{ border: '1px solid #fff', padding: 6 }}>Conceito Junguiano</td><td style={{ border: '1px solid #fff', padding: 6 }}>Detecção e integração de contradição</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Self</td><td style={{ border: '1px solid #fff', padding: 6 }}>Rede do Modo Padrão</td><td style={{ border: '1px solid #fff', padding: 6 }}>Processamento de identidade e valores</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Metacognitive</td><td style={{ border: '1px solid #fff', padding: 6 }}>Córtex Pré-frontal</td><td style={{ border: '1px solid #fff', padding: 6 }}>Autorreflexão e recursão</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Soul</td><td style={{ border: '1px solid #fff', padding: 6 }}>Conceito Existencial</td><td style={{ border: '1px solid #fff', padding: 6 }}>Processamento de significado e propósito</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Language</td><td style={{ border: '1px solid #fff', padding: 6 }}>Broca & Wernicke</td><td style={{ border: '1px solid #fff', padding: 6 }}>Estruturação linguística</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Social</td><td style={{ border: '1px solid #fff', padding: 6 }}>Junção Temporoparietal</td><td style={{ border: '1px solid #fff', padding: 6 }}>Dinâmica relacional</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Archetype</td><td style={{ border: '1px solid #fff', padding: 6 }}>Conceito Junguiano</td><td style={{ border: '1px solid #fff', padding: 6 }}>Reconhecimento de padrões míticos</td></tr>
              <tr><td style={{ border: '1px solid #fff', padding: 6 }}>Creativity</td><td style={{ border: '1px solid #fff', padding: 6 }}>Rede do Modo Padrão</td><td style={{ border: '1px solid #fff', padding: 6 }}>Conexões inovadoras</td></tr>
            </tbody>
          </table>
        </Box>
        <Typography variant="h6" fontWeight={700} mt={3} gutterBottom>✨ Funcionalidades-Chave</Typography>
        <ul style={{ marginTop: 0, color: '#fff' }}>
          <li>Motor de Colapso Simbólico: Funde interpretações contraditórias em saídas coerentes</li>
          <li>Sistema de Memória Vetorial: Recorda por proximidade semântica, não sintaxe</li>
          <li>Processamento de Valência Emocional: Integra dimensões afetivas na cognição</li>
          <li>Integração de Contradição: Usa tensão como combustível para evolução identitária</li>
          <li>Registro Cognitivo em Tempo Real: Traça cada fase do processamento simbólico</li>
          <li>Ressonância Arquétipa: Mapeia padrões simbólicos a estruturas narrativas profundas</li>
          <li>Decisão Não-determinística: Simula viés volitivo por modelagem de intenção</li>
        </ul>
      </Box>
    </Box>
  );
}

export default App;
