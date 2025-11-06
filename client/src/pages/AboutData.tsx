import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function AboutData() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header com botão de voltar */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Fontes de Dados</h1>
          <p className="text-xl text-gray-600">Informações detalhadas sobre as fontes utilizadas no dashboard</p>
        </div>

        {/* Fontes de Dados Específicas por Cidade */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle>📊 Fontes de Dados Específicas por Cidade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Rio de Janeiro */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rio de Janeiro - CLT (R$ 4.829,61/mês)</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Fonte Principal:</strong> Salário.com.br (Portal Salário)</p>
                <p>
                  <strong>URL:</strong>{' '}
                  <a
                    href="https://www.salario.com.br/profissao/analista-de-controle-de-qualidade-cbo-391210/rio-de-janeiro-rj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Ver fonte
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
                <p><strong>Data de Atualização:</strong> 03 de outubro de 2025</p>
                <p><strong>Cargo Utilizado:</strong> Analista de Controle de Qualidade (CBO 3912-10)</p>
                <p><strong>Base de Dados:</strong> 1.257 salários de profissionais admitidos e desligados nos últimos 12 meses</p>
                <p><strong>Faixa Salarial:</strong> R$ 4.400,00 (mediana) a R$ 9.291,27 (teto)</p>
                <p><strong>Piso Salarial 2025:</strong> R$ 4.697,71 (acordo coletivo)</p>
                <p><strong>Jornada:</strong> 42 horas semanais</p>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Por que usar "Analista de Controle de Qualidade" em vez de "QA Júnior"?</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Não há dados públicos específicos para "QA Júnior" no Salário.com.br</li>
                  <li>"Analista de Controle de Qualidade" é o cargo equivalente na classificação CBO (Classificação Brasileira de Ocupações)</li>
                  <li>Os dados vêm do CAGED (Cadastro Geral de Empregados e Desempregados), que é a fonte oficial do governo</li>
                </ul>
              </div>
            </div>

            {/* João Pessoa */}
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">João Pessoa - CLT (R$ 3.067,56/mês)</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Fonte Principal:</strong> Salário.com.br (Portal Salário)</p>
                <p>
                  <strong>URL:</strong>{' '}
                  <a
                    href="https://www.salario.com.br/profissao/analista-de-controle-de-qualidade-cbo-391210/joao-pessoa-pb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Ver fonte
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
                <p><strong>Data de Atualização:</strong> 03 de outubro de 2025</p>
                <p><strong>Cargo Utilizado:</strong> Analista de Controle de Qualidade (CBO 3912-10)</p>
                <p><strong>Base de Dados:</strong> Dados oficiais do CAGED</p>
                <p><strong>Faixa Salarial:</strong> R$ 2.700,00 (mediana) a R$ 5.749,00 (teto)</p>
                <p><strong>Jornada:</strong> 43 horas semanais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fontes Secundárias */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle>🔍 Fontes Secundárias Consultadas (para validação)</CardTitle>
            <CardDescription>Durante a pesquisa, também consultei estas fontes para validar e contextualizar os dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Glassdoor.com.br</h4>
              <p className="text-gray-700 mb-2">Dados encontrados:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Quality Assurance QA Junior (Brasil): R$ 3.590/mês (média)</li>
                <li>Junior QA (Brasil): R$ 3.828/mês (média)</li>
                <li>Junior QA Engineer (Rio de Janeiro): ~R$ 3.523/ano (convertido de USD)</li>
                <li>Analista De Qa Jr (João Pessoa): R$ 6.011/mês (média)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2 italic">
                Observação: Alguns dados do Glassdoor estavam bloqueados por paywall, então utilizei apenas os snippets disponíveis nos resultados de busca.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Indeed.com.br</h4>
              <p className="text-gray-700">Dados encontrados:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Analista de QA (Brasil): R$ 6.417/mês (média geral)</li>
                <li>Faixa salarial média para o cargo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Reddit (r/brdev)</h4>
              <p className="text-gray-700">Contexto: Discussões de profissionais reais sobre salários</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Menções de salários CLT para Junior QA variando de R$ 3.000 a R$ 6.000</li>
                <li>Discussões sobre diferenças entre CLT e PJ</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dados de PJ */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle>📈 Dados de PJ (Estimados - Não coletados de fonte específica)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Metodologia: Fator de multiplicação 1.6x aplicado aos salários CLT</p>
              <p className="text-gray-700 mb-3">Justificativa para usar 1.6x:</p>
              <p className="text-gray-700 mb-2">Este é um fator comumente recomendado no mercado de TI brasileiro</p>
              <p className="text-gray-700 mb-2">Compensa a ausência de:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Férias remuneradas (13,33% do salário)</li>
                <li>13º salário (8,33% do salário)</li>
                <li>FGTS (8% do salário)</li>
                <li>Impostos e contribuições (Simples Nacional ~6-8%, INSS ~11%)</li>
              </ul>
              <p className="text-gray-700 mt-2">Total aproximado: 46-48% de custos adicionais</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Cálculo:</p>
              <ul className="space-y-1 text-gray-700">
                <li>RJ CLT: R$ 4.829,61 × 1.6 = R$ 7.727,38</li>
                <li>JP CLT: R$ 3.067,56 × 1.6 = R$ 4.908,10</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitações */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle>⚠️ Limitações e Considerações Importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cargo Proxy:</h4>
              <p className="text-gray-700 mb-2">
                Utilizei "Analista de Controle de Qualidade" como proxy para "QA Júnior" porque:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Não há dados públicos específicos para "QA Júnior"</li>
                <li>É o cargo equivalente na classificação CBO</li>
                <li>Pode incluir profissionais de diferentes níveis de senioridade</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dados de PJ são estimativas:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Não há fonte pública confiável que diferencie CLT vs PJ</li>
                <li>O fator 1.6x é uma estimativa do mercado</li>
                <li>Valores reais podem variar de 1.4x a 2.0x dependendo da empresa</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Dados podem estar desatualizados:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Última atualização do Salário.com.br: 03 de outubro de 2025</li>
                <li>Mercado de TI é dinâmico</li>
                <li>Variações regionais dentro das cidades</li>
                <li>Os dados são médias para toda a cidade</li>
                <li>Profissionais em bairros premium ou com experiência podem ganhar mais</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Como Acessar as Fontes */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader>
            <CardTitle>🔗 Como Acessar as Fontes</CardTitle>
            <CardDescription>Se você quiser verificar os dados diretamente</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Salário.com.br:</strong> Acesse as URLs acima (alguns dados podem exigir plano pago)
              </li>
              <li>
                <strong>Glassdoor:</strong>{' '}
                <a
                  href="https://www.glassdoor.com.br/Salários/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  https://www.glassdoor.com.br/Salários/
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <strong>Indeed:</strong>{' '}
                <a
                  href="https://br.indeed.com/career/analista-de-qa/salaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  https://br.indeed.com/career/analista-de-qa/salaries
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Recomendação */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>💡 Recomendação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              Se você precisa de dados mais precisos e atualizados, recomendo:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Pesquisar em LinkedIn Salary (dados mais recentes)</li>
              <li>Consultar Catho ou Vagas.com (vagas abertas com salários)</li>
              <li>Entrar em contato com consultoria de RH especializada em TI</li>
              <li>Fazer pesquisa direta com empresas que contratam QA</li>
            </ul>
          </CardContent>
        </Card>

        {/* Botão de voltar no final */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

