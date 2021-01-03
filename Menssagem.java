package com.milhas.convertendobeneficios.View;

public class Menssagem {
	public static void ExibirMensagemInicial() {
		System.out.println("  #### ------------------------------- #### ");
		System.out.println("  #### SIMULADOR DE PONTOS DE VIAGENS  #### ");
		System.out.println("  ####    LATAM PASS   ITAU CARD       #### ");
		System.out.println("  #### ------------------------------- #### ");
		System.out.println("\n\n");
	}
	
	public static void pergunta1() {
		System.out.println("Informe o valor total de custos gerados no seu cartão por mês \n");
	}
	
	public static void pergunta2() {
		System.out.println("Informe o valor do dolar atual.\n");
	}
	
	public static void pergunta3() {
		System.out.println("Informe o valor de pontos que seu cartão disponibiliza por dolar utilizado.\n");
	}
	
	public static void msgCartaoAnalise() {
		System.out.println("Qual o Cartão que deseja analisar ?");
	}
	
}
