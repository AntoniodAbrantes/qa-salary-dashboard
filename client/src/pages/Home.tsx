import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Info } from 'lucide-react';
import { APP_TITLE } from '@/const';

interface SalaryData {
  cidade: string;
  regime: string;
  salario_medio: number;
}

export default function Home() {
  const [data, setData] = useState<SalaryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/qa_salaries_dashboard.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Preparar dados para o gráfico de barras (comparação por cidade)
  const chartData = [
    {
      cidade: 'Rio de Janeiro',
      CLT: data.find(d => d.cidade === 'Rio de Janeiro' && d.regime === 'CLT')?.salario_medio || 0,
      'PJ (Est.)': data.find(d => d.cidade === 'Rio de Janeiro' && d.regime === 'PJ (Estimado)')?.salario_medio || 0,
    },
    {
      cidade: 'João Pessoa',
      CLT: data.find(d => d.cidade === 'João Pessoa' && d.regime === 'CLT')?.salario_medio || 0,
      'PJ (Est.)': data.find(d => d.cidade === 'João Pessoa' && d.regime === 'PJ (Estimado)')?.salario_medio || 0,
    },
  ];

  // Dados para o gráfico de pizza (distribuição por regime)
  const pieData = [
    { name: 'CLT', value: data.filter(d => d.regime === 'CLT').length },
    { name: 'PJ (Estimado)', value: data.filter(d => d.regime === 'PJ (Estimado)').length },
  ];

  const COLORS = ['#3b82f6', '#f59e0b'];

  // Calcular diferença percentual
  const rjCLT = data.find(d => d.cidade === 'Rio de Janeiro' && d.regime === 'CLT')?.salario_medio || 0;
  const rjPJ = data.find(d => d.cidade === 'Rio de Janeiro' && d.regime === 'PJ (Estimado)')?.salario_medio || 0;
  const jpCLT = data.find(d => d.cidade === 'João Pessoa' && d.regime === 'CLT')?.salario_medio || 0;
  const jpPJ = data.find(d => d.cidade === 'João Pessoa' && d.regime === 'PJ (Estimado)')?.salario_medio || 0;

  const rjDifference = rjPJ > 0 ? ((rjPJ - rjCLT) / rjCLT * 100).toFixed(1) : 0;
  const jpDifference = jpPJ > 0 ? ((jpPJ - jpCLT) / jpCLT * 100).toFixed(1) : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{APP_TITLE}</h1>
          <p className="text-xl text-gray-600">Análise Comparativa de Salários para QA Júnior</p>
          <p className="text-sm text-gray-500 mt-2">Rio de Janeiro (RJ) vs João Pessoa (PB)</p>
          <div className="mt-4">
            <Link href="/sobre-dados">
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Info className="h-4 w-4" />
                Ver Fontes de Dados
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">RJ - Salário CLT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ {rjCLT.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-gray-500 mt-1">Média mensal</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">RJ - Salário PJ (Est.)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">R$ {rjPJ.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-gray-500 mt-1">+{rjDifference}% vs CLT</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">JP - Salário CLT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ {jpCLT.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-gray-500 mt-1">Média mensal</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">JP - Salário PJ (Est.)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">R$ {jpPJ.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-gray-500 mt-1">+{jpDifference}% vs CLT</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Comparação de Salários por Cidade</CardTitle>
              <CardDescription>CLT vs PJ (Estimado) - Valores em R$</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cidade" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => `R$ ${value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}`}
                    labelFormatter={(label) => `Cidade: ${label}`}
                  />
                  <Legend />
                  <Bar dataKey="CLT" fill="#3b82f6" />
                  <Bar dataKey="PJ (Est.)" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Distribuição por Regime</CardTitle>
              <CardDescription>Proporção de dados CLT vs PJ</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Table */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Tabela Comparativa Detalhada</CardTitle>
            <CardDescription>Dados de salários por cidade e regime de contratação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Cidade</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Regime</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">Salário Médio</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} >
                      <td className="px-4 py-3 text-gray-900">{row.cidade}</td>
                      <td className="px-4 py-3 text-gray-700">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          row.regime === 'CLT' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {row.regime}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">
                        R$ {row.salario_medio.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Analysis Section */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Análise: CLT vs. PJ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Diferenças Principais</h3>
              <p>
                A escolha entre os regimes de contratação CLT (Consolidação das Leis do Trabalho) e PJ (Pessoa Jurídica) é um fator crucial na remuneração total e nos benefícios de um profissional de QA Júnior no Brasil.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Regime CLT</h3>
              <p>
                No regime CLT, o profissional é contratado como empregado com vínculo empregatício. Neste modelo, a empresa é responsável por recolher impostos, contribuições ao INSS e oferece benefícios como férias remuneradas (com acréscimo de 1/3), décimo terceiro salário, FGTS, seguro-desemprego e aviso prévio. O salário é fixo e previsível, oferecendo maior segurança financeira e estabilidade.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Regime PJ</h3>
              <p>
                No regime PJ, o profissional atua como prestador de serviços autônomo, sem vínculo empregatício. Neste caso, o profissional é responsável por recolher seus próprios impostos (como Simples Nacional ou Lucro Presumido) e contribuições ao INSS (pró-labore). Não há direito a férias, décimo terceiro, FGTS ou seguro-desemprego. Em contrapartida, oferece maior flexibilidade de horário e local de trabalho.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Fator de Multiplicação</h3>
              <p>
                Para que uma proposta PJ seja financeiramente equivalente a uma CLT, o valor bruto deve ser significativamente maior. Um fator de multiplicação comumente sugerido no mercado de TI é de <strong>1.5 a 1.8 vezes</strong> o salário CLT, para cobrir os custos de impostos, férias, décimo terceiro e outros benefícios que o profissional PJ precisa arcar por conta própria. Nesta análise, utilizamos um fator de 1.6x para as estimativas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Diferenças Regionais</h3>
              <p>
                Os dados mostram uma diferença salarial entre Rio de Janeiro e João Pessoa. O Rio de Janeiro, como maior centro econômico, oferece salários mais altos para QA Júnior em regime CLT (R$ {rjCLT.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} vs R$ {jpCLT.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} em João Pessoa). Esta diferença se mantém proporcional no regime PJ, refletindo o custo de vida e a demanda do mercado em cada região.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-gray-600 text-sm">
        <p>Dados baseados em pesquisas de mercado (Glassdoor, Salário.com.br, Indeed) - Novembro de 2025</p>
        <p className="mt-2">Nota: Os valores de PJ são estimativas baseadas em um fator de multiplicação comum no mercado de TI.</p>
      </div>
    </div>
  );
}
