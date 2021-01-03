package com.milhas.convertendobeneficios.View;
import java.text.DecimalFormat;
import java.util.Scanner;
import java.io.IOException;
import com.milhas.convertendobeneficios.Model.Conversor;
public class View {

	private static DecimalFormat ds = new DecimalFormat("0.00");
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		
		double valor = 1000;
		double cambio = 5.20;
		double pontos = 2.5;
		boolean controlador = true;
		
		try {
			Menssagem.ExibirMensagemInicial() ;
			Menssagem.msgCartaoAnalise();
			String cartao = String.valueOf(in.nextLine());
			do {
			Menssagem.pergunta1();
			valor = Double.valueOf(in.nextLine()).doubleValue();
			Menssagem.pergunta2();
			cambio = Double.valueOf(in.nextLine()).doubleValue();
			Menssagem.pergunta3();
			pontos = Double.valueOf(in.nextLine()).doubleValue();
			Conversor  c = new Conversor(cambio);
			if(!c.validar(valor,cambio,pontos)) {
				System.out.println("erro nas informa��es passadas");
				break;
			}else {
				//System.out.println("Retornar o valor em Real : R$ " + ds.format(c.converterDolarEmReal(valor)));
				System.out.println("Convers�o em  Dolar US$ " + ds.format(c.converterRealEmDolar(valor)));
				double valorConvertido = Double.valueOf(c.converterRealEmDolar(valor)).doubleValue();
				double pontuacao = c.exibirPontuacao(valorConvertido,pontos,cambio);
				System.out.println("Pontua��o em Milhas : " + String.valueOf(pontuacao).substring(0,3) );
				System.out.println("\n Em um ano utilizando o cart�o "+cartao.toUpperCase() + " \n"
									+ "Voc� ter� de retorno  " + c.exibirEstimativaAnual(pontuacao, 12) +" pontos em Milhas\n"
									+ "Que poder� ser utilizado para viagens Nacionais e Internacionais.");	
			 System.out.println("Deseja sair da aplica��o \n 0 - Sim  1- N�o");
			 int i = Integer.valueOf(in.nextLine()).intValue();
			 if(i == 0) {
				 controlador = false;
				 System.out.println("Saindo da Aplica��o");
				 break;
			 }
			 //limpar() ;
			}
			}while(controlador);
			
		}catch(Exception e) {
			
		}finally {
			in.close();
		}
		
		
		
		
	}
	public static void limpar() throws InterruptedException, IOException {
		if (System.getProperty("View.java").contains("Windows"))
	        new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
	    else
	        Runtime.getRuntime().exec("clear");

	}

}


