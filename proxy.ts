import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    // Captura o token
    const token = request.cookies.get('auth-token');

    // Define quais rotas queremos proteger
    // (O matcher já filtra, mas essa verificação extra garante a segurança da lógica)
    const isProtectedRoute =
        request.nextUrl.pathname.startsWith('/dashboard') ||
        request.nextUrl.pathname.startsWith('/watch');

    if (isProtectedRoute && !token) {
        // Se não tiver token, redireciona para o login
        const loginUrl = new URL('/login', request.url);

        // (Opcional) Adiciona a URL de origem para redirecionar de volta após login
        loginUrl.searchParams.set('from', request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }

    // Se tiver token ou for rota pública, continua
    return NextResponse.next();
}

// Configuração de quais rotas o middleware vigia
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/watch/:path*'
    ],
}