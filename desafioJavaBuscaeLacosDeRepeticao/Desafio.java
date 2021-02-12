package desafioJavaBuscaeLacosDeRepeticao;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Desafio {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);

		List<Integer> lista = new ArrayList<>();
		int menorValor = 0;

//Input
		for (int i = 0; i < 10; i++) {
			System.out.println("Informe um valor para o vetor x");
			lista.add(in.nextInt());
		}
		lista.forEach(System.out::print);
//output

		for (Integer comparacao : lista) {
			if (comparacao < menorValor) {
				menorValor = comparacao;
			} else {
				continue;
			}

		}

		System.out.println("\nMenor Valor : \t" + menorValor );

		in.close();

	}
}