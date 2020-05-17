import { MatchReader } from './MatchReader';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('original.csv'); // With Static Class Method
const summary = Summary.winsAnalysisWithHtmlReport('Chelsea'); // With Static Class Method

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
