package com.milhas.convertendobeneficios.Domain;

import java.text.DecimalFormat;

public class Dominio implements IDominio {
	public static DecimalFormat df = new DecimalFormat("0.00");
   
	/**
	 * @description Regra de negócio para conversão dos pontos do cartão em milhas.
	 * E Nessario passar 3 parametros :  Valor que será utilizado em Real, quantidade de pontos por Dolar Utilizado
	 * valor do cambio do dia atual.
	 */
	@Override
	public double exibirPontuacao(double valor, double pontos, double cambio) {
		try {
			if (valor < cambio) {
				return 0;
			} else {
				double cont = valor;
				double pontuacao = 0;
				double creditofuturo = 0;
				do {
					if (cont > 0) {
						pontuacao = (double) (pontuacao + pontos);
					} else {
						creditofuturo = cont;
						break;
					}
					cont--;
				} while (cont > 0);
				System.out.println("Credito Futuro US$ \t" + df.format(creditofuturo));
				System.out.println("Segunda forma validando = " + (valor * pontos));
				return pontuacao;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return 0;
	}

	@Override
	public double exibirEstimativaAnual(double p, double meses) {
		double estimativa = p * meses;
		return estimativa;
	}

    public boolean validar(double v , double b, double c) {
    	if(v != -1 && b != -1 && c != -1) {
    	  return true;
    	}
    	return false;
    }

}
