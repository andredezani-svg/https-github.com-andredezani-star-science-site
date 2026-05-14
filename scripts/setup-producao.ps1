Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup de Producao - StarScience Lab" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ============================================
# PASSO 1: VERCEL
# ============================================
Write-Host ">>> PASSO 1: Configurar Vercel" -ForegroundColor Yellow
Write-Host ""

$vercelLogin = $false
if (-not (Test-Path ".vercel")) {
    Write-Host "Faca login no Vercel:" -ForegroundColor White
    Write-Host "  npx vercel login" -ForegroundColor Green
    Write-Host ""
    $response = Read-Host "Ja fez login? (s/n)"
    if ($response -eq 's') {
        $vercelLogin = $true
    }
} else {
    $vercelLogin = $true
}

if ($vercelLogin) {
    Write-Host "Vinculando projeto ao Vercel..." -ForegroundColor White
    npx vercel link --yes
    Write-Host ""

    if (Test-Path ".vercel/project.json") {
        $projectJson = Get-Content ".vercel/project.json" | ConvertFrom-Json
        $projectId = $projectJson.projectId
        $orgId = $projectJson.orgId

        Write-Host "Variaveis para os secrets do GitHub:" -ForegroundColor Green
        Write-Host "  VERCEL_PROJECT_ID = $projectId" -ForegroundColor Cyan
        Write-Host "  VERCEL_ORG_ID    = $orgId" -ForegroundColor Cyan

        $token = $null
        try {
            $token = npx vercel whoami 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  VERCEL_TOKEN     = <gere um token em vercel.com/settings/tokens>" -ForegroundColor Cyan
            }
        } catch {}
        Write-Host ""

        # Obter Project Name para referência
        $projectName = $projectJson.projectName
        if (-not $projectName) { $projectName = "site" }
        Write-Host "Projeto vinculado: $projectName" -ForegroundColor White
    }
}

# ============================================
# PASSO 2: ENV VARS (copiar .env.example)
# ============================================
Write-Host ""
Write-Host ">>> PASSO 2: Configurar Environment Variables" -ForegroundColor Yellow
Write-Host ""

if (Test-Path ".env.example") {
    if (-not (Test-Path ".env.local")) {
        Copy-Item ".env.example" ".env.local"
        Write-Host "Arquivo .env.local criado a partir de .env.example" -ForegroundColor Green
    } else {
        Write-Host ".env.local ja existe" -ForegroundColor Gray
    }

    Write-Host ""
    Write-Host "Edite .env.local e preencha:" -ForegroundColor White
    Write-Host "  DATABASE_URL......: postgresql://..." -ForegroundColor Cyan
    Write-Host "  AUTH_SECRET.......: gere com: openssl rand -hex 32" -ForegroundColor Cyan
    Write-Host "  NEXT_PUBLIC_SITE_URL: https://starsciencelab.com" -ForegroundColor Cyan
    Write-Host "  RESEND_API_KEY....: (opcional) chave do Resend" -ForegroundColor Cyan
    Write-Host "  REDIS_URL.........: (opcional) Upstash Redis URL" -ForegroundColor Cyan
}

# ============================================
# PASSO 3: GITHUB SECRETS
# ============================================
Write-Host ""
Write-Host ">>> PASSO 3: Secrets do GitHub" -ForegroundColor Yellow
Write-Host ""
Write-Host "Va em: github.com -> Settings -> Secrets and variables -> Actions" -ForegroundColor White
Write-Host "Adicione os seguintes secrets:" -ForegroundColor White
Write-Host "  VERCEL_TOKEN.......: Token em vercel.com/settings/tokens" -ForegroundColor Cyan
Write-Host "  VERCEL_ORG_ID......: Mostrado acima (org_...)" -ForegroundColor Cyan
Write-Host "  VERCEL_PROJECT_ID..: Mostrado acima (prj_...)" -ForegroundColor Cyan
Write-Host ""

# ============================================
# PASSO 4: DEPLOY VERCEL
# ============================================
Write-Host ">>> PASSO 4: Deploy manual (opcional)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Para fazer deploy agora:" -ForegroundColor White
Write-Host "  npx vercel --prod" -ForegroundColor Green
Write-Host ""

# ============================================
# PASSO 5: FAZER PUSH
# ============================================
Write-Host ">>> PASSO 5: Enviar para producao" -ForegroundColor Yellow
Write-Host ""
Write-Host "Apos configurar os secrets:" -ForegroundColor White
Write-Host "  git add ." -ForegroundColor Green
Write-Host '  git commit -m "Producao - testes E2E, CI/CD, paginas criticas"' -ForegroundColor Green
Write-Host "  git push origin main" -ForegroundColor Green
Write-Host ""
Write-Host "O CI vai rodar automaticamente e o CD fara o deploy." -ForegroundColor Yellow

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup concluido!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
