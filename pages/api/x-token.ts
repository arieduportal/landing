import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as ssid } from 'uuid';
import jsonwebtoken, { SignOptions } from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const sid = ssid();
    const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
    const _cfruid = cookies['_cfruid'];

    const config = {
        keySecret: process.env.KEY_SECRET || '',
        domainCookie: process.env.DOMAIN_COOKIE || ''
    };
    
    const signOptions: SignOptions = {
        expiresIn: '4h',
        algorithm: 'HS256',
        issuer: 'AXIOLOT HUB™',
        jwtid: sid,
    };

    const token = jsonwebtoken.sign({ sid }, config.keySecret, signOptions);

    res.setHeader('Set-Cookie', cookie.serialize('_AX-vsid', sid, {
        maxAge: 60 * 60 * 4,
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: true,
        domain: config.domainCookie,
    }));

    if (!_cfruid) {
        signOptions.expiresIn = '24h';
        const cfr = jsonwebtoken.sign({ token }, config.keySecret, signOptions);

        res.setHeader('Set-Cookie', cookie.serialize('_cfruid', cfr, {
            maxAge: 60 * 60 * 24,
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: true,
            domain: config.domainCookie || '',
        }));
    }

    return res.status(200).json({ token });
}
