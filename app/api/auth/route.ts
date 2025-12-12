import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Simulação de autenticação
    if (emailPattern.test(body.email) && body.password) {
        // Cria um token fake
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fake-token-demo';

        const response = NextResponse.json({ success: true, name: "Cliente Vip" });

        // Define o cookie HTTP-only (Segurança real)
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 // 1 dia
        });

        return response;
    }

    return NextResponse.json({ success: false, message: 'Credenciais inválidas' }, { status: 401 });
}