import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialTransactionService } from '../../services/financial-transaction.service';
import { CategoryService } from '../../../category/services/categories.service';
import { FinancialTransaction } from '../../models/financial-transaction.model';
import { CategoryTransaction } from '../../models/category-transaction.model';
import { FormBaseComponent } from '../../../base-components/form-base.component';
import { NgxCurrencyDirective } from 'ngx-currency';


@Component({
  selector: 'app-financial-transaction-form',
  templateUrl: './financial-transaction-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgxCurrencyDirective
  ]
})
export class FinancialTransactionFormComponent extends FormBaseComponent implements OnInit {
  financialTransactionForm: FormGroup;
  isEditing = false;
  financialTransactionId: string | null = null;
  categories: CategoryTransaction[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private financialTransactionService: FinancialTransactionService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {

    super();
    this.financialTransactionForm = this.fb.group({
      description: ['', Validators.required],
      categoryFinancialTransactionId: ['', Validators.required],
      value: [0, [Validators.required, Validators.min(0)]],
      transactionType: ['', [Validators.required]],
      userId: ['']
    });

  }

  ngOnInit(): void {
    this.loadCategories();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.financialTransactionId = id;
      this.loadFinancialTransaction(this.financialTransactionId);

    }

    this.unsavedChanges = true;
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories.data;
        if (categories.length === 0) {
          this.errorMessage = 'Nenhuma categoria encontrada.';
        }
      },
      error: (error) => {
        console.error('Erro ao carregar categorias:', error);
        this.errorMessage = error.error.errors.join(', ');
      }
    });
  }

  private loadFinancialTransaction(id: string): void {
    this.financialTransactionService.getFinancialTransactionById(id).subscribe({
      next: (financialTransaction) => {
        this.financialTransactionForm.patchValue({
          id: financialTransaction.id,
          categoryFinancialTransactionId: financialTransaction.categoryFinancialTransactionId,
          categoryFinancialTransaction: financialTransaction.categoryFinancialTransaction,
          value: financialTransaction.value,
          description: financialTransaction.description,
          transactionType: financialTransaction.transactionType,
          userId: financialTransaction.userId
        });
      },
      error: (error) => {
        console.error('Erro ao carregar transação financeira:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.financialTransactionForm.valid) {
      const financialTransactionData = {
        ...this.financialTransactionForm.value,
        categoryTransactionId: this.financialTransactionForm.get('categoryTransactionId')?.value,
        userId: this.financialTransactionForm.get('userId')?.value
      };

      if (this.isEditing && this.financialTransactionId) {
        financialTransactionData.id = this.financialTransactionId;
        this.financialTransactionService.updateFinancialTransaction(this.financialTransactionId, financialTransactionData).subscribe({
          next: () => {
            console.log('Transação financeira atualizado com sucesso');
            this.router.navigate(['/financial-transaction'], { state: { showSuccessMessage: true } });
          },
          error: (error) => {
            console.error('Erro ao atualizar transação financeira:', error);
            this.errorMessage = error.error.errors.join(', ');
          }
        });
      } else {
        this.financialTransactionService.createFinancialTransaction(financialTransactionData).subscribe({
          next: () => {
            console.log('Transação financeira criado com sucesso');
            this.router.navigate(['/financial-transaction']);
          },
          error: (error) => {
            console.error('Erro ao criar transação financeira:', error);
            this.errorMessage = error.error.errors.join(', ');
          }
        });
      }

      this.unsavedChanges = false;
    }
  }
}
